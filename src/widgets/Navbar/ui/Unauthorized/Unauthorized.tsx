import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";

import { HStack } from "shared/ui/Stack";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

export const Unauthorized = memo(() => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <HStack full justify="end">
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </HStack>
  );
});
