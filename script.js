// Index Page JS //
function cleanUpIndex() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function createSingleIndex(contact) {
    let index_div = document('div')
	index_div.className = 'contact'

	let index_text = document.createTextNode(`${contact.name}`)
	index_div.appendChild(index_text)

	index_div.addEventListener('click', (evt) => {
		evt.preventDefault()
		contactName = evt.target.textContent

		for (let i = 0; i < contactList.length; i++) {
			if (contactList[i].name == contactName) {
				cleanUpIndex()
				renderView(contactList[i])
			}
		}
	})

	return index_div
}

function renderIndex(contactList) {
    let classMain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classMain.appendChild(createSingleIndex(contactList[i]))
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

	document.querySelector('.button.close').addEventListener('click', listenerContact)
	document.querySelector('.button.edit').addEventListener('click', (evt) => {
		evt.preventDefault()
	})
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

	document.querySelector('#cancel').addEventListener('click', listenerContact)

	document.querySelector('#savecontact').addEventListener('click', (evt) => {
		evt.preventDefault()
		let obj_key = {}
		obj_key.name = document.querySelector('#contactname').value
		obj_key.phone = document.querySelector('#contactphone').value
		obj_key.address = document.querySelector('#contactaddress').value
		obj_key.email = document.querySelector('#contactemail').value

		contactList.push(obj_key)

		cleanUpIndex()
		renderView(obj)
	})

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

// Event Listener functions (2 & 3) //
function listenerContact(evt) {
	evt.preventDefault()
	cleanUpIndex()
	renderIndex(contactList)
} 

document.querySelector('#contactshome').addEventListener('click', listenerContact)

function listenerCreate(evt) {
	evt.preventDefault()
	cleanUpIndex()
	renderCreate()
}

document.querySelector('#newcontact').addEventListener('click', listenerCreate)