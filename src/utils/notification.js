export const openNotification = (VueInstance, position = 'top-right', color = 'danger', title, text ) => {
    VueInstance.$vs.notification({
      progress: 'auto',
      color,
      position,
      title: title,
      text: text
    });
  };

  export const openLoading = (VueInstance) => {
    const loading = VueInstance.$vs.loading()
    setTimeout(() => {
      loading.close()
    }, 3000)
  };

  export const setColor = (status) => {
    let color = null;
    if(status == 5){
      color = "#28a745"
    }
    if(status == 6){
      color = "#ffc107"
    }
    if(status == 7){
      color = "#dc3545"
    }

    return color;
  };