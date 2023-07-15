function browserHistory(input, stringArray) {
    let info = {
        "Browser Name": input["Browser Name"],
        "Open Tabs": [...input["Open Tabs"]],
        "Recently Closed": [...input["Recently Closed"]],
        "Browser Logs": [...input["Browser Logs"]]
    };

    stringArray.forEach(element => {
        const splitInfo = element.split(" ");
        const site = splitInfo.pop();
        const command = splitInfo.join(" ");

        if (command === "Open") {
            info["Open Tabs"].push(site);
            info["Browser Logs"].push(`Open ${site}`);
        } else if (command === "Close") {
            if (info["Open Tabs"].includes(site)) {
                const indexOfSite = info["Open Tabs"].indexOf(site);
                info["Open Tabs"].splice(indexOfSite, 1);

                info["Recently Closed"].push(site);
                info["Browser Logs"].push(`Close ${site}`);
            }
        } else if (element === "Clear History and Cache") {
            info["Open Tabs"] = [];
            info["Recently Closed"] = [];
            info["Browser Logs"] = [];
        }
    });

    console.log(info["Browser Name"]);
    console.log(`Open Tabs: ${info["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${info["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${info["Browser Logs"].join(", ")}`);
}

// browserHistory(
//     {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
//     "Recently Closed":["Yahoo","Gmail"],"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory(
    {"Browser Name":"Mozilla Firefox","Open Tabs":["YouTube"],"Recently Closed":["Gmail", "Dropbox"],"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);