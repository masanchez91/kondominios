import { SnackbarKey, useSnackbar, VariantType } from "notistack";

interface SnackbarRef {
  enqueueSnackbar: (
    message: string,
    options?: { variant?: VariantType },
  ) => SnackbarKey;
}

let useSnackbarRef: SnackbarRef | null = null;

export const SnackbarUtilitiesConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = "default") {
    if (useSnackbarRef) {
      useSnackbarRef.enqueueSnackbar(msg, { variant });
    }
  },
  success(msg: string) {
    SnackbarUtilities.toast(msg, "success");
  },
  error(msg: string) {
    SnackbarUtilities.toast(msg, "error");
  },
  info(msg: string) {
    SnackbarUtilities.toast(msg, "info");
  },
  warning(msg: string) {
    SnackbarUtilities.toast(msg, "warning");
  },
};

export default SnackbarUtilities;
