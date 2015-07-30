import React from 'react/addons';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './interactive';

const images = {
  npm: require('./npm.svg'),
  servers: require('./servers.gif'),
  browsers: require('./browser.gif'),
  grunt: require('./grunt.png'),
  gulp: require('./gulp.png'),
  make: require('./make.png'),
  broccoli: require('./broccoli.png'),
  salmon: require('./salmonlifecycle.jpg'),
  stephan: require('./stephanblog.png')
};

preloader([images.npm, images.gulp, images.grunt, images.make, images.broccoli, images.servers, images.browsers, images.salmon, images.stephan]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={800}>
        <Slide bgColor='tertiary'>
          <Appear fid='1'>
            <Image src={images.npm} margin='0px auto 40px' height='300px'/>
          </Appear>
          <Appear fid='2'>
            <Heading size={1} fit caps textColor='secondary' margin='-20px 0px'>
              (basically magic)
            </Heading>
          </Appear>
          <Text bold textColor='secondary'>@LewisCowper</Text>
          <Text bold textColor='secondary'>@Sheffield_JS</Text>
          <Text bold textColor='secondary'>#npmlovessheffield</Text>
        </Slide>
        <Slide bgColor='tertiary' notes='So, what is npm for?'>
          <Appear fid='1'>
            <Image src={images.npm} fit/>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor='black' notes='it is true, random internet person, that npm has a lot of node modules on it. But really...'>
          <Appear fid='1'>
            <BlockQuote>
              <Quote>but I heard npm was for node modules</Quote>
              <Cite>Someone random on the internet</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor='primary' notes='npm is just a package manager. It has modules for... browsers, io.js, mobile, angular, react, bower, jquery, nodebots, gulp, browserify, grunt, cordova, docpad, tessel'>
          <Heading fit>
            npm is the package manager for...
          </Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem>browsers</ListItem>
                <ListItem>io.js</ListItem>
                <ListItem>mobile</ListItem>
                <ListItem>angular</ListItem>
                <ListItem>react</ListItem>
                <ListItem>bower</ListItem>
                <ListItem>jquery</ListItem>
              </List>
            </Fill>
            <Fill>
              <List>
                <ListItem>nodebots</ListItem>
                <ListItem>gulp</ListItem>
                <ListItem>browserify</ListItem>
                <ListItem>grunt</ListItem>
                <ListItem>cordova</ListItem>
                <ListItem>docpad</ListItem>
                <ListItem>tessel</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading fit>
            npm is the package manager for...
          </Heading>
          <Heading caps fit margin="0 0 40px">
            javascript
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Layout>
            <Fill>
              <Appear fid='1'> 
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  On the Server
                </Heading>
                <Image src={images.servers} height='250px'/>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid='2'>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  On the Client
                </Heading>
                <Image src={images.browsers} height='250px' />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor='tertiary' notes='So, hands up for those of you who have used npm before? -- Awesome. I guess a lot will have been npm install? -- Cool, we can look at what we need to do for that command to work on this talk'>
          <Appear fid='1'>
            <Image src={images.npm} fit/>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='The minimum package.json file consists just of a name, and a version.'>
          <Heading fit>
            The minimum valid package.json
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonminimum.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='Though there are some minor issues with the package.json we supplied'>
          <Heading fit>
            npm install package-json-validator
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonminimumvalidator.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading fit>
            We should really fix those, right?
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonvalidated.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading fit>
            Woohoo fixed them!
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonvalidatedvalidator.example')}
            margin='20px auto'/>
          <Text>
            (thanks package-json-validator.com!)
          </Text>
        </Slide>
        <Slide bgColor='secondary' notes='So, at this stage, I guess the people who use grunt/gulp/broccoli are pretty much done with npm, they do a few npm install --save-devs (or as the cool kids do npm i D task-runner)?'>
          <Appear fid='1'>
            <BlockQuote>
              <Quote>npm i D task-runner task-runner-plugins</Quote>
              <Cite>cool kids with JavaScript task runners and work to do</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='Let me get a read of the room. So, hands up those of you who have used grunt to run tasks before?'>
          <Appear fid='1'>
            <Image src={images.grunt} fit/>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='So, hands up those of you who have used gulp to run tasks before?'>
          <Appear fid='1'>
            <Image src={images.gulp} fit/>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='Any other task runners I may have forgotten?'>
          <Appear fid='1'>
            <Layout>
              <Fill>
                <Image src={images.make}/>
                <Text>
                  Make?
                </Text>
              </Fill>
              <Fill>
                <Image src={images.broccoli}/>
                <Text>
                  Broccoli?
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='There is definitely one I forgot, hands up those of you who have ever used npm to run tasks before? -- That is pretty cool, I was banking on you saying that so that this next bit made sense.'>
          <Appear fid='1'>
            <Image src={images.npm} fit/>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='I think I have first got to introduce some concepts around the lifecycle'>
          <Appear fid='1'>
            <Image src={images.salmon} fit/>
          </Appear>
        </Slide>
        <Slide bgColor='primary' notes='I mean this one. npms dazzling array of lifecycle scripts. These are scripts that run at the specified times throughout the lifecycle of the package. Hence the name, lifecycle scripts, or scripts for short.'>
          <List margin={0 -150}>
            <ListItem>prepublish:
            Run BEFORE the package is published.  (Also run on local <code>npm install</code> without any arguments.)</ListItem>
            <ListItem>publish, postpublish:
            Run AFTER the package is published.</ListItem>
            <ListItem>preinstall:
            Run BEFORE the package is installed</ListItem>
            <ListItem>install, postinstall:
            Run AFTER the package is installed.</ListItem>
            <ListItem>preuninstall, uninstall:
            Run BEFORE the package is uninstalled.</ListItem>
            <ListItem>postuninstall:
            Run AFTER the package is uninstalled.</ListItem>
            <ListItem>preversion, version:
            Run BEFORE bump the package version.</ListItem>
            <ListItem>postversion:
            Run AFTER bump the package version.</ListItem>
            <ListItem>pretest, test, posttest:
            Run by the <code>npm test</code> command.</ListItem>
            <ListItem>prestop, stop, poststop:
            Run by the <code>npm stop</code> command.</ListItem>
            <ListItem>prestart, start, poststart:
            Run by the <code>npm start</code> command.</ListItem>
            <ListItem>prerestart, restart, postrestart:
            Run by the <code>npm restart</code> command. Note: <code>npm restart</code> will run the
            stop and start scripts if no restart script is provided.</ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary' notes='So that start script, for example, has a handy alias that allows certain commands to not need the "run" in the middle. Start, test, stop, restart being some obvious examples. In our case we can install some dependencies, and just add webpack as a dev server to make npm start "Just Work". For the sake of completeness, and using all our dependencies to the fullest, I am going to add in a build script, that outputs a bundle with webpack. I run that with npm run build, because build is not one of our lifecycle scripts'>
          <Appear fid='1'>
            <Text><code>npm run start == npm start</code></Text>
          </Appear>
           <Appear fid='2'>
            <CodePane
              lang='json'
              source={require('raw!./packagejsonstartscript.example')}
              margin='20px auto'/>
          </Appear>
          <Appear fid='2'>
            <Text><code>npm run build</code></Text>
            <CodePane
              lang='json'
              source={require('raw!./packagejsonunaliased.example')}
              margin='20px auto'/>
          </Appear>
        </Slide>
        <Slide bgColor='primary' notes='While we are still in lifecycle scripts, anyone with particular questions about the prepublish script, there is a really great article by Stephan Boennemann. Also Stephan is very interested in lifecycle scripts because he is the author of a package designed to help you navigate npm publish and make sense of all these lifecycle scripts, it is called semantic-release'>
          <Appear fid='1'>
            <Image src={images.stephan} fit/>
            <Text>https://medium.com/@boennemann/what-is-npm-s-prepublish-and-why-is-it-so-confusing-a948373e6be1</Text>
          </Appear>
          <Appear fid='2'>
            <Text>npmjs.com/package/semantic-release</Text>
          </Appear>
        </Slide>
        <Slide bgColor='primary' notes='So as I alluded to before, we can define arbitrary scripts to run independent of the lifecycle of a module being published. npm run build can help us integrate with other environments, and even just be a handy shortcut to "build" something. There is not a limit to how many scripts you can have, nor what they do.'>
          <Appear fid='1'>
            <Text><code>npm run ...</code></Text>
          </Appear>
          <Appear fid='2'>
            <Text><code>npm run build</code></Text>
          </Appear>
          <Appear fid='3'>
            <Text><code>npm run lint</code></Text>
            <Text><code>npm run release</code></Text>
            <Text><code>npm run deploy</code></Text>
            <Text><code>npm run whatever-your-heart-desires</code></Text>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='I thought we could look at an example task, I picked running uglify on all JavaScript in lib and putting it into dist. Grunt is quite verbose about this, and is just doing the config in the GruntFile'>
          <Heading fit>
            Gruntfile.js
          </Heading>
          <Text><code>npm i D grunt grunt-contrib-uglify</code></Text>
          <CodePane
            lang='javascript'
            source={require('raw!./Gruntfile.js.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='Gulp is definitely getting smaller, and nicer, although suffers from some readability and extraneous code that is needed because it is doing that stream thing.'>
          <Heading fit>
            gulpfile.js
          </Heading>
          <Text><code>npm i D gulp gulp-uglify</code></Text>
          <CodePane
            lang='javascript'
            source={require('raw!./gulpfile.js.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='I really like the npm script version of this one, because it gets straight to the heart of the matter, and you are free to explore the uglifyjs cli options directly, instead of relying on the grunt or gulp plugin adding support for them.'>
          <Heading fit>
            package.json
          </Heading>
          <Text><code>npm i D uglifyjs</code></Text>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonuglify.example')}
            margin='20px auto'/>
        </Slide>
        <Slide bgColor='tertiary' notes='But why would you abandon the task runners you have already I hear you cry. I think that there is definitely part of me that appreciates the common abstraction from the actual tools you get with grunt, where the config is plain to see. I also like pretending I fully leverage streams, so gulp seems like an obvious choice performance wise. I also love being a hipster, so make is great. And broccolis name comes from "browser compilation library" originally, that is just great.'>
          <Appear fid='1'>
            <Image src={images.grunt} height={250} fit/>
            <Image src={images.gulp} height={250} fit/>
            <Image src={images.make} height={250} fit/>
            <Image src={images.broccoli} height={250} fit/>
          </Appear>
        </Slide>
        <Slide bgColor='tertiary' notes='But when it comes down to it. I just dont really think that we need all that, a lot of the time. Plus, there are drawbacks. Ever wanted to use a new version of a tool, like webpack, or uglify, or karma, or similar, and your task runner of choice did not already have the plugin for it. You could write it yourself, but urgh effort.'>
          <Image src={images.grunt} height={250} fit/>
          <Image src={images.gulp} height={250} fit/>
          <Image src={images.make} height={250} fit/>
          <Image src={images.broccoli} height={250} fit/>
        </Slide>
        <Slide bgColor='primary' notes='I think that relying on plugins divorces us from how our tools actually operate. Relying on grunt-contrib-jshint over just straight jshint is one extra abstraction to carry in your head. You can have a laser focus on a bit of your process that is not as performant as you would like for example.'>
          <Appear fid='1'>
            <Heading fit>Use tools, not abstractions</Heading>
          </Appear>
        </Slide>
        <Slide bgColor='primary' notes='A long running npm install for new contributors will definitely not be helped by adding dependencies left right and centre.'>
          <Appear fid='1'>
            <Heading fit>Fewer depencies makes onboarding quicker</Heading>
          </Appear>
        </Slide>
        <Slide bgColor='primary' notes='You likely track some dependencies somewhere with npm, so your application has a package.json somewhere. Why not explore the potential and take advantage of it.'>
          <Appear fid='1'>
            <Heading fit>You are using it anyway</Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
