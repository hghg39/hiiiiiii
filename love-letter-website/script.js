const letter = `
Hiiiiiiiii.

Soooo hiiiiii againnnnnnnn. Iiiii hopeeee you like this gifttttt. I know it isn't muchhh, but I genuinely didn't know what else to do. I just wanted to give you something that could maybe make you smile, even if it's for a few seconds.

Okayyyy soooo... there's literally soooo much I want to tell you, and I don't even know where to start. I wish this wasn't a letter. I wish we were just sitting somewhere together, talking like we always did.

I want to apologize. I know you've heard me say sorry more times than anyone ever should have to. Maybe it doesn't even mean much anymore. Maybe it just sounds like another word because I've said it so many times. I was so scared of a future where you wouldn't be with me that I completely forgot that I had you with me in the present. I was so busy worrying about losing you one day that I ended up hurting you while you were still here.

I can't even ask you to give me another chance because you've already given me so many. You were already exhausted. New college, new people, trying to adjust to everything, taking care of your mom, handling responsibilities... your plate was already full. You needed someone who made life feel lighter, someone you could come to after a tiring day and just breathe around. Instead... I became another problem.

I don't think explaining my side would justify anything. It doesn't excuse my jealousy, my overthinking, my insecurity, or the way I reacted sometimes. At the end of the day, I still hurt you, and that's what matters. You didn't deserve that. You didn't deserve to carry my fears while you were already carrying so much yourself. I wish I had spent more time appreciating you instead of being scared of losing you.

Because god... do you even know how incredible you are?

You are literally the kindest person I have ever met. The way you treat animals, the way you treat people, the way little kids literally run to you and smile whenever you're around... it's one of my favorite things about you. I swear animals trust you before they trust anyone else. Kids smile around you. You have this energy that's just... pure. It's so rare. You make people feel safe without even realizing you're doing it. You're the kind of person who walks into a room and somehow makes everything feel calmer. I'm still learning how to become that kind of person, and maybe that's one of the biggest reasons I admire you so much.

You're beautiful in ways that don't just exist on the outside. It's the way you laugh, the way you care, the way you make people feel loved, the way you somehow make everything around you feel a little softer. But goddddd... you are soooo pretty. Your hairrrr... I don't even know how it's that perfect. It's literally like strands of sunlight. So soft, so pretty, sooo luscioussss. And your eyesssss... godddddd. Those beautiful dark brown eyes. Every single time I looked into them, it felt like the entire world just went quiet for a second. And when the sunlight hits them... uff babyyyyyy... they're literally the prettiest eyes I've ever seen. And your smile... your smile genuinely had the power to fix my mood no matter how bad my day was. Every time you smiled, I found myself smiling too without even realizing it. You're just... beautiful. Inside and out. I don't think you'll ever truly understand how beautiful you are through my eyes.

You know what's funny? Out of everything, I don't think I'm going to remember the big moments the most. I'm going to remember the tiny ones. The random calls. The "good morning" and "good night." The stupid jokes. The random pictures. The way seeing your name pop up on my phone instantly made my day better. Those little moments became my favorite memories because they were with you. You somehow made ordinary days feel special, and that's such a rare thing.

I don't think I ever told you this enough, but you made me want to become a better person. Not because you asked me to. Not because you expected me to. But because when someone as kind as you loves you, you naturally want to become someone who deserves that love. I know I failed at that a lot. I let my fears become louder than my trust. I let my overthinking become louder than your reassurance. Instead of protecting what we had, I sometimes became the reason it hurt.

If I could go back and change that, I would. Not because I regret loving you. I'll never regret loving you. I regret not loving you the way you deserved to be loved. I wish I had trusted you more. I wish I had listened more. I wish I had spent more time appreciating you instead of worrying about things that only existed in my head. You deserved someone who looked at you every day and thought, "God... I'm so lucky." Because the truth is... I was. I had you. And somehow I forgot that.

I don't really know what else to say except... I love you. I love you more than I've ever been able to explain properly. And if right now you need a break, then I genuinely think you should take it. Not because I want you away from me—trust me, that's the last thing I want—but because I love you enough to want what's best for you. You've been taking care of everyone else for so long. If what you need right now is time, peace, space to breathe... then I want you to have that. I'm not saying this because I'm giving up. I'm saying this because I don't want my fear of losing you to become another weight on your shoulders.

I'll miss you every single day. I'll probably want to tell you every random thing that happens, every dog I'll see, every stupid joke, every achievement, every thought that crosses my mind, because you're still the first person I want to share everything with. But I'll respect whatever you need. I want to become someone who loves you better than I have before. Not through promises. Not through words. But through actions, patience, trust, and consistency.

Thank you for every laugh, every hug, every late-night conversation, every memory, every time you stayed, every time you forgave me, and every time you believed in me. Thank you for letting me experience what it feels like to love someone as amazing as you.

I don't know what the future looks like. Maybe neither of us does. But I do know one thing. If there's one person I'll always want to see smile, it's you. I hope college gives you amazing memories. I hope your mom stays healthy. I hope you keep being the beautiful, kind, caring person that you are because this world genuinely needs more people like you. And whenever you're ready... I'd love to make more memories with you.

Ohhh, and before I end this letter... there's one more gift I want to give you. It's nothing expensive, nothing fancy, but it's something that comes from my whole heart. I hope you'll like it as much as I hope you liked this letter.

I love you.

Always. ❤️
`;

const selectors = {
  envelopeButton: ".envelope-button",
  letterContent: "#letter-content",
  letterSection: ".letter-section",
  letterPaper: ".letter-paper",
  revealItems: ".paragraph, .letter-footer",
};

const timing = {
  startFlap: 180,
  showLetter: 1900,
  scrollToLetter: 2350,
  focusLetter: 2950,
};

const body = document.body;
const envelopeButton = document.querySelector(selectors.envelopeButton);
const letterContent = document.querySelector(selectors.letterContent);
const letterSection = document.querySelector(selectors.letterSection);
const letterPaper = document.querySelector(selectors.letterPaper);
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function splitLetterIntoParagraphs(source) {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function renderLetter() {
  const fragment = document.createDocumentFragment();

  splitLetterIntoParagraphs(letter).forEach((paragraph) => {
    const element = document.createElement("p");
    element.className = "paragraph";
    element.textContent = paragraph;
    fragment.appendChild(element);
  });

  letterContent.appendChild(fragment);
}

function observeReveals() {
  const revealElements = document.querySelectorAll(selectors.revealItems);

  if (!("IntersectionObserver" in window) || reduceMotionQuery.matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -6% 0px",
      threshold: 0.08,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function revealLetterSection() {
  letterSection.setAttribute("aria-hidden", "false");
  body.classList.add("letter-visible");
}

function openLetter() {
  envelopeButton.disabled = true;
  envelopeButton.setAttribute("aria-expanded", "true");
  body.classList.add("is-opening");

  window.setTimeout(() => body.classList.add("envelope-open"), timing.startFlap);
  window.setTimeout(revealLetterSection, timing.showLetter);

  window.setTimeout(() => {
    letterSection.scrollIntoView({
      behavior: reduceMotionQuery.matches ? "auto" : "smooth",
      block: "start",
    });
  }, timing.scrollToLetter);

  window.setTimeout(() => {
    letterPaper.focus({ preventScroll: true });
  }, timing.focusLetter);
}

function trackAmbientLight() {
  if (!window.matchMedia("(pointer: fine)").matches || reduceMotionQuery.matches) {
    return;
  }

  let frameId = 0;
  let nextX = "50%";
  let nextY = "44%";

  function paintLight() {
    document.documentElement.style.setProperty("--light-x", nextX);
    document.documentElement.style.setProperty("--light-y", nextY);
    frameId = 0;
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      nextX = `${(event.clientX / window.innerWidth) * 100}%`;
      nextY = `${(event.clientY / window.innerHeight) * 100}%`;

      if (!frameId) {
        frameId = window.requestAnimationFrame(paintLight);
      }
    },
    { passive: true }
  );
}

renderLetter();
observeReveals();
trackAmbientLight();

envelopeButton.addEventListener("click", openLetter, { once: true });
