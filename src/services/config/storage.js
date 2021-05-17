const LS_KEY = {
  user_data: "userData",
  active_product: "activeProduct",
  auth_token : "auth_token"
};

const set = {
  userData: (data) => {
    localStorage.setItem(
      LS_KEY.user_data,
      JSON.stringify({
        user_data: data
      })
    );
  },
  activeProduct: (data) => {
    sessionStorage.setItem(
      LS_KEY.active_product,
      JSON.stringify({
        active_product: data
      })
    );
  },
  authToken: data => {
    localStorage.setItem(
      LS_KEY.auth_token,
      JSON.stringify({
        auth_token : data
      })
    );
  }
};

const fetch = {
  userData: () => {
    const data = localStorage.getItem(LS_KEY.user_data);
    if (data) {
      try {
        const decoded = JSON.parse(data);
        return decoded.user_data;
      } catch (err) {
        // console.log(err);
      }
    }
  },
  activeProduct: () => {
    const data = sessionStorage.getItem(LS_KEY.active_product);
    if (data) {
      try {
        const decoded = JSON.parse(data);
        return decoded.active_product;
      } catch (err) {
        // console.log(err);
      }
    }
  },
  authToken: () => {
    const data = localStorage.getItem(LS_KEY.auth_token);
    if (data) {
      try {
        const decoded = JSON.parse(data);
        return decoded.auth_token;
      } catch (err) {
        // console.log(err);
      }
    }
  }
};


const destroy = {
  userData: () => {
    localStorage.removeItem(LS_KEY.user_data);
  },
  activeProduct: () => {
    sessionStorage.removeItem(LS_KEY.active_product);
  }
};

export const storage = {
  set,
  fetch,
  destroy
};
