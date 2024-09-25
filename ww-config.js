export default {
  editor: {
    label: {
      en: "Content",
    },
    icon: "view-grid",
  },
  properties: {
    name: {
      label: {
        en: "Name",
      },
      type: "Text",
      bindable: true,
      defaultValue: "",
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
