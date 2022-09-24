export type Photo = {
  id: string,
  description: string,

  urls: {
    full: string,
    small: string,
  },

  user: {
    name: string,
    profile_image: {
      small: string,
    },
  },
};
