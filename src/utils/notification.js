export const openNotification = (VueInstance, position = 'top-right', color = 'danger') => {
    VueInstance.$vs.notification({
      progress: 'auto',
      color,
      position,
      title: 'Area Apartada',
      text: `Esta area ya se encuentra apartada intenta con las areas en verde`
    });
  };
  