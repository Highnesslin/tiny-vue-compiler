const compiler = require('./lib/compiler');
const fs = require('fs');

const output = 'output';

const targetCode = `<div id="app">
<p @click="add" :id="name">{{name}}</p>
<h1 class="item">技术摸鱼</h1>
</div>`;

const { ast, code } = compiler(targetCode);

if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
}

fs.writeFile(`./${output}/code.js`, code, err => {
  if (err) {
    console.error('code写入错误');
    return;
  }

  console.log('code写入成功');
});

fs.writeFile(`./${output}/ast.json`, JSON.stringify(ast, null, 2), err => {
  if (err) {
    console.error('ast写入错误');
    return;
  }

  console.log('ast写入成功');
});
