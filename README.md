## 津云大屏数据 frontend-project

* 环境

	> 基于 webpack + react + redux + scss 的项目开发环境
* 启动方式--测试环境

	```javascript
		npm start
	```
* 打包项目

	```javascript
		npm run dist
	```
* 环境

	端口配置(开发环境)：根目录cfg下的defaults文件

	```javascript
		const dfltPort = 8080;
	```
	domain配置：src目录下config文件夹

	```javascript
	let config = {
  		appEnv: 'dev',  // feel free to remove the appEnv property here
  		domain: 'http://test.datahunter.cn' // 请求的域名
	};
	```

* 代码规范

	```javascript
		npm run lint // 运行该命令检查代码规范
	```

* 基本规范

 - 1、基本规则

	 > 每个文件只包含一个React组件；
	 > 但是无状态, 或者 Pure 组件 允许一个文件包含多个组件始终使用 JSX 语法;
	 > 不要使用 React.createElement方法，除非初始化 app 的文件不是 JSX 格式

 - 2、组件定义

	> 建议使用 class extends React.Component

	```javascript
		 // bad
		const Demo = React.createClass({
		// ...
			render() {
			return (<div>{this.state.hello}</div>);
		}
		});

		// good
		class Demo extends React.Component {
		  // ...
		  render() {
		    return (<div>{this.state.hello}</div>);
		  }
		}

	```

 - 3、文件命名规范

	> 扩展名：React 组件使用.jsx 或者 .js 扩展名；

	> 文件名：文件名使用帕斯卡命名。 例如： ReservationCard.jsx。
	> 引用命名：React 组件使用帕斯卡命名，引用实例采用骆驼命名。

	```javascript

			// bad
			import reservationCard from './ReservationCard';

			// good
			import ReservationCard from './ReservationCard';

			// bad
			const ReservationItem = <ReservationCard />;

			// good
			const reservationItem = <ReservationCard />;
	```

	> 组件命名：组件名称应该和文件名一致， 例如： ReservationCard.jsx 应该有	> 一个ReservationCard的引用名称。 但是， 如果是在目录中的组件， 应该使	  用**index.jsx** 或者**index.js** 作为文件名 并且使用文件夹名称作为	  组件名

	```javascript

		// bad
		import Footer from './Footer/Footer';

		// bad
		import Footer from './Footer/index';

		// good
		import Footer from './Footer';
	```
  - 4、对齐

	> 为 JSX 语法使用下列的对其方式。

	```javascript
		// bad
		<Foo superLongParam="bar"
		anotherSuperLongParam="baz" />

		// good
		<Foo
		  superLongParam="bar"
		  anotherSuperLongParam="baz"
		/>

		// 如果组件的属性可以放在一行就保持在当前一行中
		<Foo bar="bar" />

			// 多行属性采用缩进
			<Foo
			 superLongParam="bar"
			 anotherSuperLongParam="baz"
			>
			<Quux />
	 	</Foo>
	```

  - 5、引号

   > JSX 的属性都采用双引号，其他的 JS 都使用单引号

		```javascript
			// bad
			<Foo bar='bar' />

			// good
			<Foo bar="bar" />

			// bad
			<Foo style= />

			// good
			<Foo style= />
		```

  - 6、空格

	> 终始在自闭合标签前面添加一个空格

	```javascript
		// bad
		<Foo/>

		// very bad
		<Foo                 />

		// bad
		<Foo
		/>

		// good
		<Foo />
	```

  - 7、属性命名

	> 属性名称始终使用骆驼命名法

	```javascript
	// bad
		<Foo
			UserName="hello"
			phone_number={12345678}
		/>

	// good
		<Foo
			userName="hello"
			phoneNumber={12345678}
		/>
	```
	> 当属性值等于true的时候，省略该属性的赋值

	```javascript
			// bad
			<Foo
				hidden={true}
			/>

			// good
			<Foo
				hidden
			/>
	```

  - 8、大括号

	> 用括号包裹多行 JSX 标签。

	```javascript
		// bad
		render() {
			return <MyComponent className="long body" foo="bar">
		   		<MyChild />
		 		</MyComponent>;
		}

		// good
		render() {
			return (
				<MyComponent className="long body" foo="bar">
					<MyChild />
				</MyComponent>
			);
		}

		// good, when single line
		render() {
			const body = <div>hello</div>;
			return <MyComponent>{body}</MyComponent>;
		}
	```

  - 9、标签

	> 当标签没有子元素时，始终时候自闭合标签

	```javascript
		// bad
		<Foo className="stuff"></Foo>

		// good
		<Foo className="stuff" />
	```
	> 如果控件有多行属性，关闭标签要另起一行。

	```javascript
		// bad
		<Foo
			bar="bar"
			baz="baz" />

		// good
		<Foo
			bar="bar"
			baz="baz"
		/>
  ```

  - 10、方法

	> 在 render 方法中事件的回调函数，应该在构造函数中进行bind绑定

	```javascript
		// bad
		class extends React.Component {
			onClickDiv() {
			// do stuff
		}

		render() {
			return <div onClick={this.onClickDiv.bind(this)} />
			}
		}

		// good
		class extends React.Component {
			constructor(props) {
			super(props);

			this.onClickDiv = this.onClickDiv.bind(this);
			}

			onClickDiv() {
			// do stuff
			}

			render() {
			return <div onClick={this.onClickDiv} />
		}
	}
	```
	> React 组件的内部方法命名不要使用下划线前缀

	```javascript
		// bad
		React.createClass({
			_onClickSubmit() {
			// do stuff
		},

			// other stuff
		});

		// good
		class extends React.Component {
			onClickSubmit() {
			// do stuff
			}

			// other stuff
		}
	```

  - 11、排序
	 * static静态方法
	 * constructor
	 * getChildContext
	 * componentWillMount
	 * componentDidMount
	 * componentWillReceiveProps
	 * shouldComponentUpdate
	 * componentWillUpdate
	 * componentDidUpdate
	 * componentWillUnmount
	 * 点击回调或者事件回调 比如 onClickSubmit() 或者 onChangeDescription()
	 * render函数中的 getter 方法 比如 getSelectReason() 或者 getFooterContent()
	 * 可选的 render 方法 比如 renderNavigation() 或者 renderProfilePicture()
	 * render
