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
  browsers: require('./browser.gif')
};

preloader([images.npm, images.servers, images.browsers]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={800}>
        <Slide transition={['zoom']} bgColor='tertiary'>
          <Appear fid='1'>
            <Image src={images.npm} margin='0px auto 40px' height='300px'/>
            <Appear fid='2'>
              <Heading size={1} fit caps textColor='secondary' margin='-20px 0px'>
                (basically magic)
              </Heading>
            </Appear>
            <Appear fid='3'>
              <Link href='https://twitter.com/lewiscowper'>
                <Text bold textColor='secondary'>@LewisCowper</Text>
              </Link>
            </Appear>
          </Appear>
          <Text bold textColor='secondary'>@SheffieldJS</Text>
          <Text bold textColor='secondary'>#npmlovessheffield</Text>
        </Slide>
        <Slide transition={['zoom']} bgColor='tertiary' notes='So, hands up for those of you who have used npm before?'>
          <Appear fid='1'>
            <Image src={images.npm} fit/>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor='black'>
          <Appear fid='1'>
            <BlockQuote>
              <Quote>but I heard npm was for node modules</Quote>
              <Cite>Someone random on the internet</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor='primary' notes='npm is a package manager. It has modules for... browsers, io.js, mobile, angular, react, bower, jquery, nodebots, gulp, browserify, grunt, cordova, docpad, tessel'>
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
        <Slide>
          <Heading fit>
            npm is the package manager for...
          </Heading>
          <Heading caps fit margin="0 0 40px">
            javascript
          </Heading>
          <Layout>
            <Fill>
              <Appear fid='1'> 
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  On the Server
                </Heading>
                <Image src={images.servers} height='220px'/>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid='2'>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  On the Client
                </Heading>
                <Image src={images.browsers} height='220px' />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <Heading fit>
            The minimum valid package.json
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonminimum.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <Heading fit>
            from package-json-validator.com
          </Heading>
          <CodePane
            lang='json'
            source={require('raw!./packagejsonminimumvalidator.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading fit>
            npm install package-json-validator
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgDarken={0.75}>
          <Appear fid='1'>
            <Heading size={1} caps fit textColor='primary'>
              Full Width
            </Heading>
          </Appear>
          <Appear fid='2'>
            <Heading size={1} caps fit textColor='tertiary'>
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid='3'>
            <Heading size={1} caps fit textColor='primary'>
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor='black'>
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor='primary'>
          <Heading caps fit size={1} textColor='tertiary'>
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor='secondary'>
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <List>
            <ListItem><Appear fid='1'>Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid='2'>Autofit text</Appear></ListItem>
            <ListItem><Appear fid='3'>Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid='4'>React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid='5'>PDF export</Appear></ListItem>
            <ListItem><Appear fid='6'>And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={1} caps fit textColor='tertiary'>
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor='tertiary'>
        </Slide>
      </Deck>
    );
  }
}
