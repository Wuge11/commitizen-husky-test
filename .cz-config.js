module.exports = {
  types: [
    { value: 'feat',     name: 'feat:     增加新功能' },
    { value: 'bug',      name: 'bug:      测试反馈bug列表中的bug号' },
    { value: 'fix',      name: 'fix:      修复bug' },
    { value: 'ui',       name: 'ui:       更新UI' },
    { value: 'docs',     name: 'docs:     文档变更' },
    { value: 'style',    name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'perf',     name: 'perf:     性能优化' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'release',  name: 'release:  发布' },
    { value: 'deploy',   name: 'deploy:   部署' },
    { value: 'test',     name: 'test:     增加测试' },
    { value: 'chore',    name: 'chore:    构建过程或辅助工具的变动(更改配置文件)' },
    { value: 'revert',   name: 'revert:   回退' },
    { value: 'build',    name: 'build:    打包' }
  ],
  // 消息步骤 
  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型(必填)',
    // scope: '\n请输入文件修改范围(可选)',
    // used if allowCustomScopes is true
    // customScope: '请输入文件修改范围',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(破坏性修改)(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  skipEmptyScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72
}