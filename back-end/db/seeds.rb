User.destroy_all
Project.destroy_all
Contact.destroy_all
ProjectTask.destroy_all
TeamMemberProjectTask.destroy_all
TeamMember.destroy_all
DailyTask.destroy_all

dev = User.create(name: 'Devin Davis', email: 'devindavis@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')
haley = User.create(name: 'Haley Proctor', email: 'haley@gmail.com', password: '555', image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/124116460_784088595769085_5257786213152791880_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=h4Qmo4tlUnoAX_AMOd4&_nc_ht=scontent-dfw5-2.xx&oh=548248441c8d3a723d016d352746ad98&oe=5FDA9A91')

proj1 = Project.create(name: 'Arcane Central', deadline: Date.parse("02/12/2020"), notes: 'Karley and Jake should have back-end running smoothly by early December. Client has expressed his concern that we provide weekly updates to the project manager, Bree. Looking at a project delivery in late February. Client has given a hard deadline of 03/20/2021.', user_id: dev.id)
proj2 = Project.create(name: 'Haley Project', deadline: Date.parse("02/12/2020"), notes: 'Some note', user_id: haley.id)
proj3 = Project.create(name: 'The Domain', deadline: Date.parse("01/08/2021"), notes: 'Some note', user_id: dev.id)
proj4 = Project.create(name: 'Animals Anonymous', deadline: Date.parse("02/12/2020"), notes: 'Some note', user_id: dev.id)
proj5 = Project.create(name: 'Highlands', deadline: Date.parse("26/11/2020"), notes: 'Some note', user_id: dev.id)
proj6 = Project.create(name: 'San Francisco Brewery', deadline: Date.parse("02/12/2020"), notes: 'Some note', user_id: dev.id)
proj7 = Project.create(name: 'NY First Bank', deadline: Date.parse("20/11/2020"), notes: 'Some note', user_id: dev.id)
proj8 = Project.create(name: 'In House Security', deadline: Date.parse("10/12/2020"), notes: 'Some note', user_id: dev.id)
proj9 = Project.create(name: 'Onboarding System', deadline: Date.parse("10/2/2021"), notes: 'Some note', user_id: dev.id)
proj10 = Project.create(name: 'Company Website', deadline: Date.parse("02/12/2020"), notes: 'Some note', user_id: dev.id)
proj11 = Project.create(name: 'Absolute Agenda', deadline: Date.parse("02/12/2020"), notes: 'Some note. lsjf;alkdjsflksjdfklsjdf;kjsd;flkjdklfjsdl;kfjsdlkfjsd;lkfjs;dlkfjsdlkfjsd;lkfsjd;lfkjsd;lfkjsd;lfkjdflsdkf;fskdlfjsdlkfjdslkfjsdlkfjsdlk.fdslkfjdlksjflkdjflksd.', user_id: dev.id)

task1p1 = ProjectTask.create(name: 'Create Login', importance: 'low', deadline: Date.parse("20/11/2020"), description: 'Have Brendan call Jeff and discuss project layout. Mention project timeline and determine they are in agreement. Do not forget to ask about his wife, Julie - she recently had knee surgery. Adding more to this to make sure I get to the second line. Maybe even three lines, we will see.', status: 'incomplete', project_id: proj1.id)
task2p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("21/11/2020"), description: 'Review login and discuss security with Karley.', status: 'incomplete', project_id: proj1.id)
task3p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("20/1/2021"), description: 'Review stretch goals and determine what can be implemented.', status: 'incomplete', project_id: proj1.id)
task4p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("01/1/2021"), description: 'Walk-through project with client. Ask if the process has been up to his standards.', status: 'incomplete', project_id: proj1.id)
task5p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("20/2/2021"), description: 'Deliver project.', status: 'incomplete', project_id: proj1.id)
task6p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("21/11/2020"), description: 'Meet with team and collaborate on MVP.', status: 'complete', project_id: proj1.id)
task7p1 = ProjectTask.create(name: 'Create Signup', importance: 'medium', deadline: Date.parse("20/10/2020"), description: 'Project ideation and timeline plans.', status: 'complete', project_id: proj1.id)

contact1 = Contact.create(name: 'John Morgan', email: 'johnanthonymorgan@gmail.com', phone: '512-592-0293', notes: 'John says you owe him a steak dinner. Treat him when he comes in town. May have some good ideas for new projects at Arcane Central. Ask him about their cyber security system.', project_id: proj1.id)
contact2 = Contact.create(name: 'Rane Sylvan', email: 'sylvanr88@gmail.com', phone: '512-773-5023', notes: '', project_id: proj1.id)
contact3 = Contact.create(name: 'Emma Jones', email: 'ejones626@gmail.com', phone: '512-662-4033', notes: 'Emma expressed concern on our timeframe last time we spoke.', project_id: proj1.id)
contact4 = Contact.create(name: 'Danny Griffin', email: 'dannygriffin5@gmail.com', phone: '512-934-8423', notes: 'Danny may have some ideas for stretch goals. Should check back in January.', project_id: proj1.id)
contact5 = Contact.create(name: 'Jack Watson', email: 'jackwatson@gmail.com', phone: '512-200-3210', notes: '', project_id: proj1.id)

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

dt1 = DailyTask.create(description: 'Assign New Project Ideation to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt2 = DailyTask.create(description: 'Assign New Project Structure to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt4 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt5 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("03/12/2021"), status: 'incomplete', user_id: dev.id)
dt6 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt7 = DailyTask.create(description: 'COMPLETE COMPLETE COMPLETE', deadline: Date.parse("02/12/2020"), status: 'complete', user_id: dev.id)
dt8 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("013/2/2021"), status: 'incomplete', user_id: dev.id)
dt9 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt10 = DailyTask.create(description: 'Assign New to 3 Team Membersfd faldkf jasdl fsld', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt11 = DailyTask.create(description: 'COMPLETE COMPLETE COMPLETE', deadline: Date.parse("20/12/2020"), status: 'complete', user_id: dev.id)
dt12 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt13 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("10/12/2020"), status: 'incomplete', user_id: dev.id)
dt14 = DailyTask.create(description: 'Assign New to 3 Team Membldaf dslkfajd ers', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt15 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt16 = DailyTask.create(description: 'Assign New to 3 Team Mefdlkas fdlk fklasdjf lfdkjaflkdmbers', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)
dt17 = DailyTask.create(description: 'Assign New to 3 Team Members', deadline: Date.parse("02/12/2020"), status: 'incomplete', user_id: dev.id)

puts 'Seeds Run!'