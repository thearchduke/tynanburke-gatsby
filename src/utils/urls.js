const nameRouteMap = {
    'writing': '/writing',
    'work': '/work',
    'photography': '/photography',
    'home': '/'
}

export default (name) => nameRouteMap[name]
