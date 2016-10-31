import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        this.projects = [{
            id: 1,
            title: "GoHire",
            subtitle: "Lorem ipsum dolor sit amet"
        }, {
            id: 2,
            title: "Projection Mapping prototype",
            subtitle: "Lorem ipsum dolor sit amet"
        }]
    }

    getAll() {
    	return this.projects;
    }
    getProject(id) {
    	return this.projects.find(project => project.id === id)
    }
}



const projectStore = new ProjectStore;
export default projectStore;