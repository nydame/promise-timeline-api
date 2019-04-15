module.exports = {
  events: [
    {
      date: "1555101003759",
      attendable: "true",
      attended: "false",
      clientId: "1",
      type: "court"
    },
    {
      date: "1555101013759",
      attendable: "true",
      attended: "false",
      clientId: "1",
      type: "case"
    },
    {
      date: "1556740800467",
      attendable: "true",
      attended: "false",
      clientId: "1",
      type: "court"
    },
    {
      date: "1556740900000",
      attendable: "true",
      attended: "false",
      clientId: "1",
      type: "case"
    }
  ],
  reminders: [
    {
      date: "1556740760000",
      event: "1556740800467-1",
      message: "Hello John, just a reminder about your court date tomorrow."
    },
    {
      date: "1556740780000",
      event: "1556740900000-1",
      message: "Hello John, this is to remind you about your appointment with your case manager."
    }
  ],
  clients: {
    id: 1,
    firstName: "John"
  }
};