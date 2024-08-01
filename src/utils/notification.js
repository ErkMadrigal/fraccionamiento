export const openNotification = (VueInstance, position = 'top-right', color = 'danger', title, text ) => {
    VueInstance.$vs.notification({
      progress: 'auto',
      color,
      position,
      title: title,
      text: text
    });
  };
  