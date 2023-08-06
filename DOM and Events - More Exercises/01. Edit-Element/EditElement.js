function editElement(docElement, placeToInsert, text) {
    let documentText = docElement.textContent;
    
    while (documentText.match(placeToInsert)) {
        documentText = documentText.replace(placeToInsert, text);
    }

    docElement.textContent = documentText;
}