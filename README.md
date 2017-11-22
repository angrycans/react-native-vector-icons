## fork https://oblador.github.io/react-native-vector-icons/


only
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0, **675** icons) 

add http://www.iconfont.cn/ lib

## Installation

1. Run: `$ npm install react-native-vector-icons-iconfont --save`

2. react-native link


##update iconfont 
1. cd {your project}/node_modules/react-native-vector-icons-iconfont

2. cp http://www.iconfont.cn/ your lib to iconfont/

3. npm run build

4. only android need cp Fonts/IconFont.ttf android/src/main/assets/fonts


## sync https://oblador.github.io/react-native-vector-icons/
1.git clone https://oblador.github.io/react-native-vector-icons/

2.cd react-native-vector-icons

3.rm -rf .git

4.rm -rf *.js

5.cp react-native-vector-icons-iconfont/*.js iconfont readme.md 

6.



 

