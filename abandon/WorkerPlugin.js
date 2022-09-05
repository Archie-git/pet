const { watchFile } = require('node:fs');
const { exec } = require('node:child_process');

class WorkerPlugin {
  constructor(props) {
    this.options = {
      sources: props.sources || [],
    };
    this.options.sources.forEach((item) => {
      watchFile(item, () => {
        this.build();
      });
    });
  }

  build = (callback) => {
    const command = this.options.sources.map((item) => {
      return item.endsWith('.ts')
        ? `tsc ${item} --outDir dist/`
        : `cp ${item} dist/`;
    }).join(' & ');
    exec(command, (err) => {
      if (err) {
        console.error('worker build 失败: ', command);
      }
      callback?.();
    });
  };

  apply(compiler) {
    compiler.hooks.done.tapAsync('WorkerPluginEmit', (compilation, callback) => {
      this.build(callback);
    });
  }
}

module.exports = WorkerPlugin;
