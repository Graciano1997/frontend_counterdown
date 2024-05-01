# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)

- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [solution URL](https://github.com/Graciano1997/frontend_counterdown/)
- Live Site URL: [live site URL](https://frontend-counterdown.vercel.app/)

## My process

### Built with

- ReactJS
- Vite

### What I learned

I recap the React Use State.

To see how you can add code snippets, see below:

```html
      <main className='mainContainer'>
        <h1 id='header'>We're launching soon</h1>
        <Counter timeObject={timeObject} />
      </main>
      <Footer/>
```
```css
  background-color: hsl(234, 17%, 12%);
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
```
```js     
    
    const [totalSecond, setTotalSecond] = useState(1209600);
    const [timeObject, setTimeObject] = useState({
    day:parseInt(totalSecond/86400),
    hour:parseInt(totalSecond%86400/3600),
    min:parseInt(((totalSecond%86400)%3600)/60),
    seconds:parseInt(((totalSecond%86400)%3600)%60)});
    
    if(totalSecond!==0){
      setTimeout(()=>{
        setTotalSecond(totalSecond-1);
        setTimeObject({
          day:parseInt(totalSecond/86400),
          hour:parseInt(totalSecond%86400/3600),
          min:parseInt(((totalSecond%86400)%3600)/60),
          seconds:parseInt(((totalSecond%86400)%3600)%60)}
        );
      },1000);
    }
```


### Continued development

**Tailwind and other CSS framework**

### Useful resources

- [Microverse](https://microverse.org/) - This helped me with the Full Stack Development Program.

## Author

- Website - [Graciano Henrique Portfolio](https://portofolio-graciano.vercel.app/)
- Frontend Mentor - [@Graciano1997](https://www.frontendmentor.io/profile/Graciano1997)
- Twitter - [@GracianoSoft](https://www.twitter.com/Gracianosoft)

## Acknowledgments

- Microverse
- FrontEnd Mentor