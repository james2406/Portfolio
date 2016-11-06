import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        this.projects = [{
            id: 1,
            title: "GoHire",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "GoHire is an startup company, developing online recruitment software. Through using the GoHire applicant tracking system and online recruitment software, companies can significantly improve their hiring process.",
            imgUrl: ["http://i.imgur.com/u62xdzy.png", "http://i.imgur.com/1NGWcxn.png"],
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
            }],
            sections: [{
                title: "Problem",
                text: ["GoHire contacted me as they needed a front-end developer to build the recruitment web application. I would be recieving designs over the course of my time there, and eventually working with a backend developer to link up various endpoints."],
                imgUrl: "",
            }, {
                title: "Role",
                text: [
                    "user application forms, focused on user experience to simplify the application process",
                    "an application dashboard, with features such as calendar and chat",
                    "an applicant tracking system, used to view and filter through applicants",
                    "an interview calendar, to organise the interview process for each job"
                ],
                imgUrl: "",
            }, {
                title: "Solution",
                text: [
                    "As a remote front-end developer working with a small team, there were three key parts to my role:",
                    "Design - Once the structure of each page was complete I could being working on the css. I decided to use the sass preprocessor, as I use its variables, nesting and mixins. Sass also makes it easier to manage files, especially when following this guide https://sass-guidelin.es/. I took a mobile first approach, and all pages and components are set up responsively.",
                    "Development - Once the styling of each page had been completed, I could begin working on the interaction. For speed and compatibility reasons I decided to use jQuery library. I also used a modular pattern wherever possible, alongside mustache.js for templating. This made development straightforward, and will be much easier to read and manipulate the JavaScript in the future.",
                    "Teamwork - GoHire currently hires all of its employees remotely, using services like Slack and Skype for the team to stay up to date with each other. I worked with a backend developer, who provided me an api and various endpoints to make requests to the server set up."
                ],
                imgUrl: "",
            }, {
                title: "Conclusion",
                text: [],
                imgUrl: "",
            }]
        }, {
            id: 2,
            title: "Projection Mapping prototype",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "Nullam ante tellus, laoreet ut tellus id, blandit rhoncus massa. Vestibulum finibus pretium lorem quis condimentum. Nulla tincidunt vehicula arcu vel malesuada. Mauris ipsum dui, elementum fringilla orci vel, blandit accumsan mi",
            imgUrl: ["https://think360studio.com/wp-content/uploads/2015/07/web-design-trends-predition-2016-3.png", "http://i.imgur.com/1NGWcxn.png"],
            skills: [{
                id: 1,
                skill: "Skill 1"
            }, {
                id: 2,
                skill: "Skill 2"
            }, {
                id: 3,
                skill: "Skill 3"
            }],
            sections: [{
                title: "",
                text: [],
                imgUrl: "",
            }, {
                title: "",
                text: [],
                imgUrl: "",
            }]
        }, {
            id: 3,
            title: "3D education project",
            subtitle: "Lorem ipsum dolor sit amet",
            text: "Nullam ante tellus, laoreet ut tellus id, blandit rhoncus massa. Vestibulum finibus pretium lorem quis condimentum. Nulla tincidunt vehicula arcu vel malesuada. Mauris ipsum dui, elementum fringilla orci vel, blandit accumsan mi",
            imgUrl: ["http://i.imgur.com/CwRa9wj.png", "http://i.imgur.com/1NGWcxn.png"],
            skills: [{
                id: 1,
                skill: "Skill 1"
            }, {
                id: 2,
                skill: "Skill 2"
            }, {
                id: 3,
                skill: "Skill 3"
            }],
            sections: [{
                title: "",
                text: [],
                imgUrl: "",
            }, {
                title: "",
                text: [],
                imgUrl: "",
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
