# uCoin Helper

[uCoin.net](https://ucoin.net/) is an online coin catalog and a network for coin collectors. The site allows users to collect points doing some tasks (classifying images, etc.). You can exchange those points for [premium membership](https://ucoin.net/pro).

This repo contains a Chrome extension that adds a keyboard-driven way to fulfill those tasks, aiming for better speed and reliability than the usual, mouse-driven way.

This Chrome extension is **unofficial** and 100% unaffiliated with uCoin.net. **Use at your own risk!**

## Tasks

### Side ID

The task consists of verifying if the [obverse and reverse](https://en.wikipedia.org/wiki/Obverse_and_reverse) of the coin are correctly labeled, using the user's expertise and often visual or textual cues.

The extension provides the following keyboard shortcuts:

* `A`, `←`: The sides are correctly labeled (obverse is on the left)
* `S`, `↓`: The user is not sure if sides are correctly labeled or not
* `D`, `→`: The sides are incorrectly labeled (obverse is on the right)
* `E`: Report an error

The intuition is pointing to which side is the obverse.

### Comparison

The task consists of choosing the most suitable set of photographs (obverse + reverse) to represent a coin emission (both coins have the same [type](https://portlandcoins.blogspot.com/2013/11/what-are-km-numbers.html), year, and [mint mark](https://en.wikipedia.org/wiki/Mint_mark)).

The extension provides the following keyboard shortcuts:

* `A`, `←`: The photographs on the left are the best
* `S`, `↓`: Both photographs sets have similar quality
* `D`, `→`: The photographs on the right are the best
* `E`: Report an error

The intuition is pointing to the side that contains the best set of photographs.

### Theme

The task consists of choosing if the [obverse, reverse, or both sides](https://en.wikipedia.org/wiki/Obverse_and_reverse) of the coin contains depictions of the given theme (like "Animals", "Coat of Arms", etc.), using visual cues.

* `A`, `←`: The theme appears only on the obverse
* `S`, `↓`: The theme appears on both the obverse and the reverse
* `D`, `→`: The theme appears only on the reverse
* `E`: Report an error

The intuition is pointing to the side where the theme appears.

### Control

The task consists of classifying one set of photographs (obverse + reverse) according to six criteria. This task is the most time-consuming, so it rewards the most points to the user.

The extension provides the following keyboard shortcuts:

* `W`, `↑`: Return to the previous question
* `A`, `←`: Select the first option, and advance to the next question
* `S`, `↓`: Select the second option, and advance to the next question
* `D`, `→`: Select the third option, and advance to the next question
* `Enter`: Submit the form

Apart from the shortcuts, the extension highlights the current question for better visualization.

## Roadmap

* Test compatibility with Firefox
* Consider releasing extension in browser stores
