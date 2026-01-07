// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-gitp",
    title: "GitP",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-2025-annecy",
              title: "2025: Annecy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/2025/";
              },
            },{id: "dropdown-2026-tbd",
              title: "2026: TBD",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/2026/";
              },
            },{id: "news-postal-horn-the-0th-edition-of-the-workshop-took-place-in-annecy",
          title: ':postal_horn:  The 0th edition of the workshop took place in Annecy!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
