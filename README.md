# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties - layouts, colors, buttons
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - used to route the application
- [react-modal](https://reactcommunity.org/react-modal/) - React modal package, used for mobile filtering features

### What I learned

To be able to condtionaly render components (ex: mobile filter modal) I created a hook called useScreenSize. This hook can determine the screen size and use the boolean value isSmallScreen to conditionally render different components based on the screen width in any of the used components.

```js
const useScreenSize = (smallScreenThreshold = 480) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < smallScreenThreshold
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < smallScreenThreshold);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smallScreenThreshold]);

  return isSmallScreen;
};
```

This is my first experience on handling multiple inputs for filtering, this application has 3 filter inputs. I created a function called handleFilterJobs, this function first checks to see if all inputs are empty, if so then when the search button is pressed, it will show all the jobs. The 'filtered' variable uses the filter method to apply the filtering logic based on the user inputs. The jobs that meet the search and filtering criteria are set in the filteredData state and displayed for the user

```js
const handleFilterJobs = (filterOptions) => {
  const { search, location, checkbox } = filterOptions;
  if (!search && !location && !checkbox) {
    setFilterData(jobs);
    return;
  }
  const filtered = jobs.filter((job) => {
    const companyMatch = job.company.toLowerCase().includes(search.toLowerCase());
    const titleMatch =
      job.position.toLowerCase().includes(search.toLowerCase()) && !companyMatch;
    const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
    const isFullTime = checkbox ? job.contract === "Full Time" : true;

    return (companyMatch || titleMatch) && (locationMatch || !location) && isFullTime;
  });
  setFilterData(filtered);
};
```


### Useful resources

- [Fullstack Open](https://fullstackopen.com/en/) - This curriculum helped me learn React and react router

