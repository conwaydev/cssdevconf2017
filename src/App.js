import React, { Component } from 'react';

import { Deck, Image, Slide, BlockQuote, Quote, Cite } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Franklin Gothic Book",
    secondary: "Helvetica"
});

class App extends Component {
    render() {
        return (
            <Deck theme={theme}>
                <Slide>
                    <Image src={require('./images/cssdev.png')} alt="CSS Dev Conf 2017" />
                    <p>
                        Hotel Monteleone, New Orleans, LA<br/>
                        October 9 - 11, 2017
                    </p>
                </Slide>

                <Slide>
                    <h1>Mina Markham</h1>
                    <h2>“Saving the World with CSS”</h2>
                    <p><a href="http://mina.codes/">http://mina.codes/</a></p>
                </Slide>

                <Slide>
                    <Image src={require('./images/pantsuit.png')} width="100%" />
                </Slide>

                <Slide>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Sole owner of the pantsuit project
                            <ul>
                                <li>Define -> Implement -> Test -> Iterate -> (Re)define</li>
                                <li>Took 6 weeks for first iteration</li>
                                <li>Never open-sourced because people would use it to impersonate the campaign</li>
                            </ul>
                        </li>
                        <li>Brought down HillaryClinton.com in her first 2 weeks on the job</li>
                        <li>Had to deal with internet trolls</li>
                    </ul>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000', fontSize: '3rem' }}>“<s>Reddit</s><br/> &nbsp;<s>FaceBook</s><br/> &nbsp;<s>Twitter</s><br/> &nbsp;<em>The Internet</em> is a wasteland”</Quote>
                        <Cite>Mina Markham</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000' }}>“Done is better than&nbsp;perfect”</Quote>
                        <Cite>Mina Markham</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000' }}>“If you don’t have technical debt, you’re not moving fast enough”</Quote>
                        <Cite>Mina Markham</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <h1>Paul Grant</h1>
                    <h2>“Introducing a Design System to a&nbsp;Legacy&nbsp;Product”</h2>
                    <p><a href="https://cssinate.com/">https://cssinate.com/</a></p>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000', fontSize: '3rem' }}>“Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, an the situation at hand.”</Quote>
                        <Cite>Norm Kerth</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 10.48.15 AM.png')} alt="The Boss" width='80%' />
                    <p>
                        <a href="https://codepen.io/cssinate/pen/XeELxW">https://codepen.io/cssinate/pen/XeELxW</a>
                    </p>
                </Slide>

                <Slide>
                    <h1>Varun Vachhar</h1>
                    <h2>“Slaying Your Webpack Dragon 🐲”</h2>
                    <p>
                        <a href="http://varun.ca/">http://varun.ca/</a><br/>
                        <strong>Slides:</strong> <a href="https://winkervsbecks.github.io/slaying-your-webpack-dragon/#/">available here</a>
                    </p>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 10.44.23 AM.png')} alt="Webpack" width='80%' />
                    <p>
                        <a href="https://winkervsbecks.github.io/slaying-your-webpack-dragon/#/11">https://winkervsbecks.github.io/slaying-your-webpack-dragon/#/11</a>
                    </p>
                </Slide>

                <Slide>
                    <h2>Overcoming Webpack Fatigue</h2>

                    <ul style={{ textAlign: 'left' }}>
                        <li>Understand the Core Concepts</li>
                        <li><a href="https://webpack.js.org/">webpack.js.org</a> & <a href="https://webpack.academy/">webpack.academy</a></li>
                        <li>Write your own config to learn</li>
                        <li>Bootstrap projects using CLIs</li>
                        <li>Read the config generated by CLIs</li>
                    </ul>
                </Slide>

                <Slide>
                    <h1>Julia Konivestska</h1>
                    <h2>“Light Speed Web with Progressive&nbsp;Web&nbsp;Apps”</h2>
                    <p><a href="https://twitter.com/taurusJ_K">https://twitter.com/taurusJ_K</a></p>
                </Slide>

                <Slide>
                    <Image src={require('./images/service-workers.jpg')} width="80%" />
                </Slide>

                <Slide>
                    <h1>Matt James</h1>
                    <h2>“Ride the Lightning (Making Fast Websites)”</h2>
                    <p><a href="http://mattjamesmedia.com/">http://mattjamesmedia.com/</a><br />
                        <strong>Slides:</strong> <a href="https://glen-purchase.glitch.me/#/">available here.</a>
                    </p>
                </Slide>

                <Slide>
                    <img src={require('./images/coverage.jpg')} alt="Coverage" width="80%"/>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 10.41.26 AM.png')} alt="Service worker" width="80%" />
                </Slide>

                <Slide>
                    <img src={require('./images/C78paWQV4AAU3v0.jpg')} alt="Scary" width="80%"/>
                </Slide>

                <Slide>
                    <h1>Micah Godbolt</h1>
                    <h2>“Design Systems 2.0: Creating Consistent&nbsp;Interfaces”</h2>
                    <p><a href="https://micahgodbolt.com/">https://micahgodbolt.com/</a><br/>
                        <strong>Slides:</strong> <a href="https://docs.google.com/presentation/d/1esPtd7kNnCZdqdxeepO-2p8Y2vYP1-jPVDY8tkNNcto/edit#slide=id.g2798ac7028_0_0">available here</a></p>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-12 at 5.37.22 PM.png')} alt="Microsoft" width="80%" />
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000' }}>“Writing the correct CSS once is pretty easy. Making the CSS work in all situations, and for all people is the hard part.”</Quote>
                        <Cite>Micah Godbolt</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-12 at 5.37.34 PM.png')} alt="Microsoft" width="80%" />
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-12 at 5.37.43 PM.png')} alt="Microsoft" width="80%" />
                </Slide>

                <Slide>
                    <h2>“The future of design systems is JavaScript”</h2>
                    <ul style={{ textAlign: 'left' }}>
                        <li>JavaScript isn’t replacing HTML and CSS, It’s making the HTML and CSS in our Design Systems more powerful</li>
                        <li>We don’t have to quit doing what we love to learn JavaScript, We need to the find ways that JavaScript can power the things we love</li>
                        <li>We don’t need more JavaScript Devs, We need more JavaScript empowered Front-end Devs</li>
                    </ul>
                </Slide>

                <Slide>
                    <h1>Vincent Nalupta</h1>
                    <h2>“Style Guides, Languages, and the Tale of the Million Dollar Button”</h2>
                    <p><a href="http://snailbites.com/">http://snailbites.com/</a><br/>
                        <strong>Slides:</strong> <a href="https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2">available here</a></p>
                </Slide>

                <Slide>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            “Design APIs”
                            <ul>
                                <li>Initially the CSS is the source of truth for the ”system”</li>
                            </ul>
                        </li>
                        <li>
                            Language problems
                            <ul>
                                <li>Sluggish delivery</li>
                                <li>Inconsistency</li>
                                <li>Communication</li>
                            </ul>
                        </li>
                    </ul>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 11.09.18 AM.png')} alt="Designer" width="80%" />
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000' }}>“There is a difference between a <em>website</em> and a <em>picture</em> of a website.”</Quote>
                        <Cite>Vincent Nalupta</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 11.24.00 AM.png')} alt="Designer language" width="80%" />
                </Slide>

                <Slide>
                    <img src={require('./images/parade.jpg')} alt="Parade" width="80%" />
                </Slide>

                <Slide>
                    <img src={require('./images/beignets.jpg')} alt="Cade Du Monde" width="80%" />
                </Slide>

                <Slide>
                    <h1>Harry Roberts</h1>
                    <h2>“Why Fast Matters”</h2>
                    <p><a href="https://csswizardry.com/">https://csswizardry.com/</a><br/>
                        <strong>Slides:</strong> <a href="https://speakerdeck.com/csswizardry/why-fast-matters">available here</a></p>
                </Slide>

                <Slide>
                    <h2><a href="https://wpostats.com/">WPOstats.com</a></h2>
                    <ul style={{ textAlign: 'left' }}>
                        <li>It will make you money</li>
                        <li>It will save you money</li>
                        <li>It makes users happier</li>
                    </ul>
                </Slide>

                <Slide>
                    <ul style={{ textAlign: 'left' }}>
                        <li>”The trainline reduced latency by 0.3 seconds [...], and customers would spend an extra 8.1M pounds a year”</li>
                        <li>“Netflix saw a 43% derease in their bandwidth bill after turning on gzip”</li>
                        <li>”GQ cut load time by 80% and saw an 80% increase in traffic. Median time spent on the site increased by 32%”</li>
                    </ul>

                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 11.33.34 AM.png')} alt="Next Billion" width="80%" />
                    <a href="https://developers.google.com/web/billions/">https://developers.google.com/web/billions/</a>
                </Slide>

                <Slide>
                    <ol style={{ textAlign: 'left', listStyle: 'none' }}>
                        <li><strong>Step 0:</strong> Want a Fast Website</li>
                        <li>
                            <strong>Step 1:</strong> Understand the Problem ...Properly Understand It
                            <ul>
                                <li>If you can be fast on an old Android device on 2G connection, then you've really achieved something</li>

                                <li>It doesn't mean much if our site / apps are fast when on the latest Macbook Pro with broadband internet</li>

                                <li>Use <a href="https://www.charlesproxy.com/">CharlesProxy</a> as a way to throttle your internet or test</li>

                                <li>Google recommends that we use Moto G4 to test our sites or apps on. The iPhone 7 Plus is two to three times faster than the Moto G4.</li>
                            </ul>
                        </li>
                    </ol>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote style={{ color: '#000' }}>“There is no replacement for real devices.”</Quote>
                        <Cite>Harry Roberts</Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <ol style={{ textAlign: 'left', listStyle: 'none' }}>
                        <li>
                            <strong>Step 2:</strong> Know Where Everything Comes From
                            <ul>
                                <li>What does this script do? Which team is in charge of this thing? Are we even using this?</li>
                                <li>[Tag managers] “That one line of JS that allows non-technical people to run arbitrary bits of JS on the page and often creates a crazy performance hit”</li>
                                <li>In the Experiment section of Chrome Dev tools, there is a way to show the "Product" of where scripts are coming for and shows statistics on the request</li>
                                <li>If you want to simulate a SPOF, just point third-party domains to blackhole servers to simulate fallen outages: <a href="http://blog.patrickmeenan.com/2011/10/testing-for-frontend-spof.html">http://blog.patrickmeenan.com/2011/10/testing-for-frontend-spof.html</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Step 3:</strong> Measure Everything
                            <ul>
                                <li>Measure before and measure after</li>
                                <li>In Google Analytics: Behavior >> Site Speed >> Page Timings</li>
                                <li>Care: Prioritize, consider, and champion performance</li>
                                <li>Lets use <a href="https://speedcurve.com/">SpeedCurve</a> again</li>
                            </ul>
                        </li>
                    </ol>
                </Slide>

                <Slide>
                    <h1>Wes Bos</h1>
                    <h2>“Whats New In JavaScript”</h2>
                    <p><a href="http://wesbos.com/">http://wesbos.com/</a><br/>
                        <strong>Slides:</strong> <a href="https://wesbos.github.io/future-js/#1">available here</a></p>
                </Slide>

                <Slide>
                    <h2 style={{ fontSize: '4rem' }}>ASYNC + AWAIT IS SICK</h2>
                </Slide>

                <Slide>
                    <img src={require('./images/callback.png')} alt="Callback hell" width="80%" />
                    <p><a href="https://wesbos.github.io/future-js/#36">https://wesbos.github.io/future-js/#36</a></p>
                </Slide>

                <Slide>
                    <img src={require('./images/Screen Shot 2017-10-13 at 11.51.04 AM.png')} alt="async" width="80%" />
                </Slide>

                <Slide>
                    <h2 style={{ fontSize: '4rem' }}>Intersection Observer is also friggen SICK</h2>
                </Slide>

                <Slide>
                    <video src="https://wesbos.github.io/future-js/images/viewport.mp4" autoPlay={true} width="80%"></video>
                </Slide>

                <Slide>
                    <h1>Val Head</h1>
                    <h2>“The Ins and Outs of Easing”</h2>
                    <p><a href="http://valhead.com/">http://valhead.com/</a><br/>
                        <strong>Slides:</strong> <a href="https://www.slideshare.net/valhead/the-ins-and-outs-of-easing">available here</a></p>
                </Slide>

                <Slide>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Penner Easing Equations
                            <ul>
                                <li>easeInQuad</li>
                                <li>easeInQuart</li>
                                <li>easeInElastic</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <img src={require('./images/easing.png')} alt="Easing" width="80%" />
                    </p>
                </Slide>

                <Slide>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Cubic bezier & Penner Equations
                            <ul>
                                <li>Great for pre-defined UI animations</li>
                                <li>Great for animations that demonstrate actions/ functionality</li>
                                <li>Great for making groups of animations behave similarly</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <img src={require('./images/cubic.png')} alt="Cubic" width="80%" />
                    </p>
                </Slide>

                <Slide>
                    <img src={require('./images/wrapup.jpg')} alt="wrap up panel" width="80%" />
                </Slide>

                <Slide>
                    <p><strong>Q:</strong> Slow internet connections on the rest of the world was very insightful. With more developers coming up with client-side apps, what is your word of wisdom with JS frameworks?</p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Harry Roberts:</strong> If it's an all or nothing deal, that's scary. It's more about reliability and think about progressive enhancement. So reframe it from performance and more about resilience and reliability. How well does it fail is the way to think about it.
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Estelle Weyl:</strong> If you can't do a ten minute presentation on why you need the dependency, don't use it. If you just need a calendar widget, don't use React. Just use the date input.
                    </p>
                </Slide>

                <Slide>
                    <p><strong>Q:</strong> Can you talk about A/B testing and the hit on performance?</p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Estelle Weyl:</strong> Don't test all the time and test everything. Test only what you need for a small group at a time.
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Stephanie Hobson:</strong> MDN does testing with TrafficCop (only useful if you use Python). It is HTML that is different and not using JS in order to do A/B testing.
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Harry Roberts:</strong> Client-side A/B testing is the devil because it makes everything slower. One particular tool asks you to paste an inline script that makes the entire page invisible then uses an external script that loads asynchronously and then makes the change and then removes opacity: 0 !important when it is done. You could click on things still but it was a huge single point of failure.
                    </p>
                </Slide>

                <Slide>
                    <p><strong>Q:</strong> Following up on the tag manager / tracking is evil question, how do we manage the relationship between business and developers?</p>
                    <p style={{ fontSize: '1.5rem' }}><strong>Wes Bos:</strong> Somewhere out there, there is marketing conference telling your developers to "just put this line of JS into the code." As much as we want to rally against it, you have to remember that you are on the same team and sometimes a slightly slower application could. Your job is to make it as fast as possible to get the best possible result.</p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Michael Rog:</strong> It's not so much that A/B testing is evil. Big block of JavaScript is evil. It is our job as developers to have empathy for why we're doing what we're doing and solve it in a better way. Not convince people that they don't need this.
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Harry Roberts:</strong> Be conservative about what you do and educate people. The actual client who had that issue is that it is a nightmare scenario. Maybe the difference is worth that potential failure? Try to think of things as far as weighing the potential benefit versus the risk of the nightmare scenario.
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        <strong>Jason Pamental:</strong> If they get that tool, they should use it responsibly and we have to be teachers as far as not simply complaining and educating them that we're ultimately just looking out for the health of the organization. Our end goal is for it to be successful. It's not set and forget it. It's "Yes you can have this tool, but this is how you use it properly."
                    </p>
                </Slide>

                <Slide>
                    <h1>Brenda Storer</h1>
                    <h2>“Get On The Grid”</h2>
                    <p>
                        <a href="http://brendastorer.com/">http://brendastorer.com/</a><br/>
                        <strong>Slides:</strong> <a href="http://brendastorer.com/presentations/2017-10-CSSDevConf/assets/player/KeynoteDHTMLPlayer.html#0">available here</a>
                    </p>
                </Slide>

                <Slide>
                    <img src={require('./images/grid.png')} alt="Grid" width="80%" />
                    <p>
                        <a href="https://codepen.io/brendamarienyc/full/BRyQzg">https://codepen.io/brendamarienyc/full/BRyQzg</a>
                    </p>
                </Slide>

                <Slide>
                    <h1>Dave Rupert</h1>
                    <h2>Closing Keynote Q/A</h2>
                    <p><a href="http://daverupert.com/">http://daverupert.com/</a></p>
                </Slide>

                <Slide>
                    <h2>All in all I still feel that its the best conference in our part of the web industry</h2>
                    <p>
                        A repository of the best notes by the best note taker at CSS Dev Conf:  <a href="https://github.com/bencodezen/cssdevconf2017">https://github.com/bencodezen/cssdevconf2017</a>
                    </p>
                </Slide>
            </Deck>
        );
    }
}

export default App;
