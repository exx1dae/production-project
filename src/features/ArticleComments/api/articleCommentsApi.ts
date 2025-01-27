import { rtkApi } from "shared/api/rtkApi";
import { getUserAuthData } from "entities/User";
import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article";
import {
  ArticleComment,
  ArticleCommentSchema,
} from "../model/types/articleComment";

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleCommentsById: build.query<ArticleComment[], string>({
      query: (articleId: string) => ({
        url: "/comments",
        params: {
          articleId,
          _expand: "user",
        },
      }),
      providesTags: (_result, _error, articleId) => [
        { type: "ArticleComment", id: articleId },
      ],
    }),
    sendArticleComment: build.mutation<ArticleComment, string>({
      queryFn: async (text, api, _extraOptions, fetchWithBQ) => {
        const { getState } = api;

        const currentUser = getUserAuthData(getState() as StateSchema);
        const currentArticleDetails = getArticleDetailsData(
          getState() as StateSchema,
        );

        if (!currentUser || !currentArticleDetails) {
          throw new Error("no data");
        }

        const newComment: ArticleCommentSchema = {
          text,
          articleId: currentArticleDetails.id,
          userId: currentUser.id,
        };

        const result = await fetchWithBQ({
          url: "/comments",
          method: "POST",
          body: newComment,
        });

        if (result.error) {
          throw result.error;
        }

        return { data: result.data as ArticleComment };
      },
      invalidatesTags: (result, _error, _text, _) => [
        { type: "ArticleComment", id: result?.articleId },
      ],
    }),
  }),
});

export const useGetArticleCommentsById =
  commentsApi.useGetArticleCommentsByIdQuery;
export const useSendArticleComment = commentsApi.useSendArticleCommentMutation;
