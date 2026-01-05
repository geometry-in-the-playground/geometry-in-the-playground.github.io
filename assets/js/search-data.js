// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-0th-2025",
              title: "0th -- 2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/2025/";
              },
            },{id: "dropdown-1st-2026",
              title: "1st -- 2026",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/2026/";
              },
            },{id: "dropdown-2nd-2027",
              title: "2nd -- 2027",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/2027/";
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
