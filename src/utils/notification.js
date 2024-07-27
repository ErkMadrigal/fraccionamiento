export const openNotification = (VueInstance, position = 'top-right', border = 'danger') => {
    VueInstance.$vs.notification({
      border,
      position,
      title: 'Area Apartada',
      text: `Esta area ya se encuentra apartada intenta con las areas en verde`
    });
  };
  