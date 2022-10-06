\*\*\*Feeling bored because I'm sick

- I was in bed for over 20 hours
- Amazon Product is just sth. for fun to kill time..
- I'm not sure how much I'll get done here.. I'll take some meds and they will probably knock me out real soon...

\*\* addEventListener

- Here are some of the most common event types and event names:
- 1. Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
- 2. Touch Events: touchstart, touchend, touchmove, touchcancel
- 3. Keyboard Events: keydown, keyup, keypress
- 4. Form Events: focus, blur, change, submit
- 5. Window Events: resize, scroll, load, unload, hashchange

- use return a function and removeEventListener

```
useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
```
