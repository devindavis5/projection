User.destroy_all
Project.destroy_all
Contact.destroy_all
ProjectTask.destroy_all
TeamMemberProjectTask.destroy_all
TeamMember.destroy_all
DailyTask.destroy_all

dev = User.create(name: 'Devin Davis', email: 'devindavis@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')
haley = User.create(name: 'Haley Proctor', email: 'haley@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')

proj1 = Project.create(name: 'Devin Project', deadline: 'December 2, 2020', notes: 'Some note.lkdjfl;akjsdflk;ajdsf l;kadsjf; lkasdjfl;a sdkjfsa l;dkfjal ;sdkj falskdfjklasd fljksadl ;fkja sdl;kfj asd;lkfjas d;lkfj sa;ldkf jasl;dkjf;lsakdjfl ksa djf;lkasj df;lk ajsd fl;ka sj df; lks djklf; jsad;l kf..s al;kdf ja;lskdjfl s;ad kjf;l.', user_id: dev.id)
proj2 = Project.create(name: 'Haley Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: haley.id)
proj3 = Project.create(name: 'Devin Second Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj4 = Project.create(name: 'Devin Third Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj5 = Project.create(name: 'Devin Fourth Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj6 = Project.create(name: 'Devin Fifth Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj7 = Project.create(name: 'Devin Sixth Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj8 = Project.create(name: 'Devin Seventh Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj9 = Project.create(name: 'Devin Eighth Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj10 = Project.create(name: 'Devin Ninth Project', deadline: 'Dec 2, 2020', notes: 'Some note', user_id: dev.id)
proj11 = Project.create(name: 'Devin Tenth Project', deadline: 'December 2, 2020', notes: 'Some note. lsjf;alkdjsflksjdfklsjdf;kjsd;flkjdklfjsdl;kfjsdlkfjsd;lkfjs;dlkfjsdlkfjsd;lkfsjd;lfkjsd;lfkjsd;lfkjdflsdkf;fskdlfjsdlkfjdslkfjsdlkfjsdlk.fdslkfjdlksjflkdjflksd.', user_id: dev.id)

task1p1 = ProjectTask.create(name: 'create login', importance: 'low', deadline: 'Nov 18, 2020', description: 'create login page with authentication.', status: 'incomplete', project_id: proj1.id)
task2p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'November 17, 2020', description: 'create user sign up, with authentication. kdlfa js;dkl. dlfkja . sdkflj .', status: 'incomplete', project_id: proj1.id)
task3p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)
task4p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)
task5p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)
task6p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)
task7p1 = ProjectTask.create(name: 'create signup', importance: 'medium', deadline: 'Nov 17, 2020', description: 'create user sign up, with authentication.', status: 'incomplete', project_id: proj1.id)

contact1 = Contact.create(name: 'John Smith', email: 'JohnSmith@gmail.com', phone: '512-932-8423', notes: 'some notes about contact', project_id: proj1.id)
contact2 = Contact.create(name: 'John Smithlkfas', email: 'JohnSmith@gmail.com2', phone: '512-934-8423', notes: 'some notes about contact2', project_id: proj1.id)
contact3 = Contact.create(name: 'John Smithwe', email: 'JohnSmith@gmail.com2', phone: '512-934-8423', notes: 'some notes aboutfsdfdfs  fs dfds dfdf ds dfd contact2', project_id: proj1.id)
contact4 = Contact.create(name: 'John Smithwefw', email: 'JohnSmith@gmail.com2', phone: '512-934-8423', notes: 'some notes about contact2', project_id: proj1.id)
contact5 = Contact.create(name: 'John S', email: 'JohnSmith@gmail.com2', phone: '512-934-8423', notes: 'some notes about contact2', project_id: proj1.id)

tm1 = TeamMember.create(name: 'Brendan', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm2 = TeamMember.create(name: 'Karley', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm3 = TeamMember.create(name: 'John', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: haley.id)
tm3 = TeamMember.create(name: 'Austin', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm4 = TeamMember.create(name: 'David', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm5 = TeamMember.create(name: 'Erica', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)
tm6 = TeamMember.create(name: 'Jake', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91', user_id: dev.id)

tmpt1 = TeamMemberProjectTask.create(project_task_id: task1p1.id, team_member_id: tm1.id)
tmpt2 = TeamMemberProjectTask.create(project_task_id: task1p1.id, team_member_id: tm2.id)
tmpt3 = TeamMemberProjectTask.create(project_task_id: task1p1.id, team_member_id: tm3.id)
tmpt4 = TeamMemberProjectTask.create(project_task_id: task2p1.id, team_member_id: tm6.id)
tmpt5 = TeamMemberProjectTask.create(project_task_id: task2p1.id, team_member_id: tm3.id)
tmpt6 = TeamMemberProjectTask.create(project_task_id: task2p1.id, team_member_id: tm2.id)
tmpt7 = TeamMemberProjectTask.create(project_task_id: task3p1.id, team_member_id: tm2.id)
tmpt8 = TeamMemberProjectTask.create(project_task_id: task3p1.id, team_member_id: tm1.id)
tmpt9 = TeamMemberProjectTask.create(project_task_id: task4p1.id, team_member_id: tm4.id)
tmpt10 = TeamMemberProjectTask.create(project_task_id: task4p1.id, team_member_id: tm6.id)
tmpt11 = TeamMemberProjectTask.create(project_task_id: task5p1.id, team_member_id: tm1.id)
tmpt12 = TeamMemberProjectTask.create(project_task_id: task5p1.id, team_member_id: tm2.id)
tmpt13 = TeamMemberProjectTask.create(project_task_id: task6p1.id, team_member_id: tm3.id)
tmpt14 = TeamMemberProjectTask.create(project_task_id: task7p1.id, team_member_id: tm5.id)
tmpt15 = TeamMemberProjectTask.create(project_task_id: task7p1.id, team_member_id: tm6.id)

dt1 = DailyTask.create(description: 'Assign New Project Ideation to 3 Team Members', deadline: 'Nov 20, 2020', status: 'incomplete', user_id: dev.id)
dt2 = DailyTask.create(description: 'Assign New Project Structure to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt4 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt5 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt6 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt7 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt8 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt9 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt10 = DailyTask.create(description: 'Assign New to 3 Team Membersfd faldkf jasdl fsld', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt11 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt12 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt13 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt14 = DailyTask.create(description: 'Assign New to 3 Team Membldaf dslkfajd ers', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt15 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt16 = DailyTask.create(description: 'Assign New to 3 Team Mefdlkas fdlk fklasdjf lfdkjaflkdmbers', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)
dt17 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: 'Nov 21, 2020', status: 'incomplete', user_id: dev.id)

puts 'Seeds Run!'