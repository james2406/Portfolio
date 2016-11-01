import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        this.projects = [{
            id: 1,
            title: "GoHire",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod molestie leo, in placerat quam. Proin a scelerisque dui, vel tincidunt sapien. Donec quis consectetur leo, a vestibulum diam. Phasellus ligula quam, vestibulum eu sapien a, fringilla euismod ante",
            imgUrl: "http://i.imgur.com/u62xdzy.png",
            skills: [{
                id: 1,
                skill: "Skill 1"
            }, {
                id: 2,
                skill: "Skill 2"
            }, {
                id: 3,
                skill: "Skill 3"
            }, {
                id: 4,
                skill: "Skill 4"
            }]
        }, {
            id: 2,
            title: "Projection Mapping prototype",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "Nullam ante tellus, laoreet ut tellus id, blandit rhoncus massa. Vestibulum finibus pretium lorem quis condimentum. Nulla tincidunt vehicula arcu vel malesuada. Mauris ipsum dui, elementum fringilla orci vel, blandit accumsan mi",
            imgUrl: "https://think360studio.com/wp-content/uploads/2015/07/web-design-trends-predition-2016-3.png",
            skills: [{
                id: 1,
                skill: "Skill 1"
            }, {
                id: 2,
                skill: "Skill 2"
            }, {
                id: 3,
                skill: "Skill 3"
            }]
        }, {
            id: 3,
            title: "3D education project",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "Nullam ante tellus, laoreet ut tellus id, blandit rhoncus massa. Vestibulum finibus pretium lorem quis condimentum. Nulla tincidunt vehicula arcu vel malesuada. Mauris ipsum dui, elementum fringilla orci vel, blandit accumsan mi",
            imgUrl: "http://i.imgur.com/CwRa9wj.png",
            skills: [{
                id: 1,
                skill: "Skill 1"
            }, {
                id: 2,
                skill: "Skill 2"
            }, {
                id: 3,
                skill: "Skill 3"
            }]
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