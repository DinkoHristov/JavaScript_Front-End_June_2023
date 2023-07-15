function createComments(input) {
    let users = {};
    let comments = {};

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command.includes("user")) {
            command.splice(0, 1);
            let userName = command.join(" ");

            if (!users.hasOwnProperty(userName)) {
                users[userName] = {};
            }
        } else if (command.includes("article")) {
            command.splice(0, 1);
            let articleName = command.join(" ");

            if (!comments.hasOwnProperty(articleName)) {
                comments[articleName] = [];
            }
        } else {
            let userName = command.splice(0, 1)[0];
            command.splice(0, 1);
            command.splice(0, 1);
            let articleInfo = command.splice(0, 1);
            let articleName = articleInfo[0].substr(0, articleInfo[0].length - 1);
            // let titleInfo = command.splice(0, 1);
            // let commentTitle = titleInfo[0].substr(0, titleInfo[0].length - 1);
            // let commentContent = command.join(" ");
            let commentInfo = "";            
            for (let c = 0; c < command.length; c++) {
                let currWord = command.splice(0, 1)[0];

                if (currWord[currWord.length - 1] === ",") {
                    commentInfo += currWord.substr(0, currWord.length - 1);
                    break;
                } else {
                    commentInfo += currWord + " ";
                }
            }

            let commentContent = command.join(" ");

            if (users.hasOwnProperty(userName)) {
                if (comments.hasOwnProperty(articleName)) {
                    let newInfo = {
                        userName: userName,
                        commentTitle: commentInfo,
                        commentContent: commentContent
                    };

                    comments[articleName].push(newInfo);
                }
            }
        }
    }

    let sortedComments = [];
    Object.entries(comments).forEach(([article, data]) => {
        let length = data.length;

        sortedComments.push({
            name: article,
            length: length
        }); 
    });

    sortedComments.sort((a, b) => b.length - a.length).forEach(item => {
        console.log(`Comments on ${item.name}`);
        comments[item.name].sort((a, b) => a.userName.localeCompare(b.userName)).forEach(user => {
            console.log(`--- From user ${user.userName}: ${user.commentTitle} - ${user.commentContent}`)
        });
    });
}

// createComments(
// [
// 'user aUser123',
// 'someUser posts on someArticle: NoTitle, stupidComment', 
// 'article Books', 
// 'article Movies', 'article Shopping', 
// 'user someUser', 
// 'user uSeR4', 
// 'user lastUser', 
// 'uSeR4 posts on Books: I like books, I do really like them', 
// 'uSeR4 posts on Movies: I also like movies, I really do', 
// 'someUser posts on Shopping: title, I go shopping every day', 
// 'someUser posts on Movies: Like, I also like movies very much'
// ]
// );

createComments(
[
'user Mark', 
'Mark posts on someArticle: NoTitle, stupidComment', 
'article Bobby', 
'article Steven', 'user Liam', 
'user Henry', 'Mark posts on Bobby: Is, I do really like them', 
'Mark posts on Steven: title, Run', 
'someUser posts on Movies: Like'
]
);