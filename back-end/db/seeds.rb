User.destroy_all
Project.destroy_all
Contact.destroy_all
ProjectTask.destroy_all
TeamMemberProjectTask.destroy_all
TeamMember.destroy_all
DailyTask.destroy_all

dev = User.create(name: 'Devin Davis', email: 'devindavis@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')
haley = User.create(name: 'Haley Proctor', email: 'haley@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')

proj1 = Project.create(name: 'Devin Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj2 = Project.create(name: 'Haley Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: haley.id)
proj3 = Project.create(name: 'Devin Second Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)

task1p1 = ProjectTask.create(name: 'create login', importance: 'low', deadline: 'Nov 18, 2020', description: 'create login page with authentication.', status: 'incomplete', project_id: proj1.id)
task2p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)

contact1 = Contact.create(name: 'John Smith', email: 'JohnSmith@gmail.com', phone: '512-932-8423', notes: 'some notes about contact', project_id: proj1.id)
contact2 = Contact.create(name: 'John Smith2', email: 'JohnSmith@gmail.com2', phone: '512-934-8423', notes: 'some notes about contact2', project_id: proj1.id)

tm1 = TeamMember.create(name: 'Brendan', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm2 = TeamMember.create(name: 'Karley', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm3 = TeamMember.create(name: 'John', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: haley.id)

tmpt = TeamMemberProjectTask.create(project_task_id: task1p1.id, team_member_id: tm1.id)
tmpt = TeamMemberProjectTask.create(project_task_id: task1p1.id, team_member_id: tm2.id)
tmpt = TeamMemberProjectTask.create(project_task_id: task2p1.id, team_member_id: tm1.id)

dt1 = DailyTask.create(description: 'Assign New Project Ideation to 3 Team Members', deadline: 'Nov 20, 2020', status: 'incomplete', user_id: dev.id)
dt2 = DailyTask.create(description: 'Assign New Project Structure to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt3 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: haley.id)

puts 'Seeds Run!'