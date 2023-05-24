const skills = [
    {
        id: 123904,
        Language: 'Python', 
        experience: '6/10',
        preferred: true
    },

    {
        id: 324209,
        Language: 'JavaScript', 
        experience: '8/10',
        preferred: true
    },

    {
        id: 324728,
        Language: 'C++', 
        experience: '3/10',
        preferred: false
    },

    {   
        id: 643783,
        Language: 'Java', 
        experience: '1/10',
        preferred: false
    }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return todos;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.preferred = false
    skills.push(skill)
}

function deleteOne(id){
    id = parseInt(id)
    const idx = todos.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}