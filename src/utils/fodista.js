const fodista = {
  request_demo: async (phone) => {
    console.log(phone);
    const args = {
      phone: phone,
    };
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    const res = await fetch(
      `https://system.bc.brandimic.com/api/method/fodistademo`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(args),
      }
    );
  },
};

export default fodista;
