// Index Page JS //
function cleanUpIndex() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function createSingleIndex(contact) {
    return `<a href="page3.html"><div class="contact">${contact.name}</div></a>`
}

function renderIndex(contactList) {
    let classMain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classMain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}


// View Page JS // 
function cleanUpView() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function renderView(contactList) { // utilizes the sample contactList to show it works; I had this as "contact"
    let classMain = document.querySelector('.main')

    classMain.insertAdjacentHTML('afterbegin', `<div class='contactinfo'></div>`)
    let contactInfo = document.querySelector('.contactinfo')

    let contactAvatar = `<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">`
    contactInfo.insertAdjacentHTML('beforeend', contactAvatar)

    let contactType = ['name', 'email', 'phone', 'address']
    let pushedContent = []
    pushedContent.push(`<div class="contact${contactType[0]}">${contactList[0][contactType[0]]}</div>`) // *would have been just "contact"

    for (let i = 1; i <= 3; i++) {
        pushedContent.push(`<div class="contact${contactType[i]}">${contactType[i]}: ${contactList[0][contactType[i]]}</div>`) // *prev comment
    }

    for (let i = 0; i <= 3; i++) {
        contactInfo.insertAdjacentHTML('beforeend', pushedContent[i])
    }

    let viewButtons = 
    `<div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>`
    contactInfo.insertAdjacentHTML('beforeend', viewButtons)
}


// Create Page JS //

function cleanUpCreate() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function renderCreate() {
    let classMain = document.querySelector('.main')
    
    let contactType = ['Name', 'Phone', 'Address', 'Email']
	let fieldType = contactType.slice(0)
	for (let i = 0; i < fieldType.length; i++) (
		fieldType[i] = fieldType[i].toLowerCase()
	)

	let inputType = ['text', 'tel', 'text', 'email']
    let inputContainer = []
	for (let i = 0; i <= 3; i++) {
		inputContainer[i] = 
		`<div class="inputcontainer">
			<input type="${inputType[i]}" id="contact${fieldType[i]}" name="contact${fieldType[i]}" placeholder="Contact ${contactType[i]}">
			<button class="extrafield" id="extra${fieldType[i]}field" name="extra${fieldType[i]}field">+</button>
		</div>`
	}

	let editContact = 
	`<div class="contactedit">
		<div class="contactimg">
			<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
		</div>
		<div class="form">
			<form>
			</form>
		</div>	
	</div>`
	classMain.insertAdjacentHTML('afterbegin', editContact)

	let createContent = document.querySelector('form')
	for (let i = 0; i < inputContainer.length; i++) {
		createContent.innerHTML += inputContainer[i]
	}

	let createButtons = 
	`<div class="buttons">
		<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
		<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
	</div>`
	createContent.insertAdjacentHTML('beforeend', createButtons)
}


// I used the sample contactList, very cool Jeremy! //
const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},
    {    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]