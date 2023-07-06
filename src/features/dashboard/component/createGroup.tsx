import { FC, useState } from 'react';

const CreateGroupForm: FC = () => {
	const [groupName, setGroupName] = useState('');
	const [members, setMembers] = useState<any>([]);

	const handleGroupNameChange = (event: any) => {
		setGroupName(event.target.value);
	};

	const handleMemberChange = (event: any, index: number) => {
		const updatedMembers: any = [...members];
		updatedMembers[index] = event.target.value;
		setMembers(updatedMembers);
	};

	const handleAddMember = () => {
		setMembers([...members, '']);
	};

	const handleCreateGroup = () => {
		// Logic to create the group using groupName and members
		console.log('Group Name:', groupName);
		console.log('Members:', members);
		// Reset form values
		setGroupName('');
		setMembers([]);
	};

	return (
		<div className='create-group-wrapper'>
			<h2>Create Group</h2>
			<form>
				<label>
					Group Name:
					<input type='text' value={groupName} onChange={handleGroupNameChange} />
				</label>
				<br />
				<label>
					Members:
					{members.map((member: string, index: number) => (
						<div key={index}>
							<input type='text' value={member} onChange={(event) => handleMemberChange(event, index)} />
						</div>
					))}
					<button type='button' onClick={handleAddMember}>
						Add Member
					</button>
				</label>
				<br />
				<button type='button' onClick={handleCreateGroup}>
					Create Group
				</button>
			</form>
		</div>
	);
};

export default CreateGroupForm;
