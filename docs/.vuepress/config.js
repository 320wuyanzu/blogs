module.exports = {
    base: '/blogs/',
    title: '随便写点儿啥子',
    description: '想到啥子写啥子',
    themeConfig: {
        lastUpdated: '最后一次更新',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: '考研复习笔记', link: '/notes.md'},
            { text: '飞机相关', link: '/ac.md'}
        ],
        sidebarDepth:2,
        sidebar: sidebar_group()
    }
}

function sidebar_group(){
    return [
        {
            title: '笔记',
            collapsable: true,
            children: ['./notes', './ac']
        }
    ]
}