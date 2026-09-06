CREATE TABLE task (
	ID SERIAL PRIMARY KEY,
	description VARCHAR(255) not null
);

INSERT INTO task (DESCRIPTION)
VALUES 
('Complete the project documentation'),
('Review the code changes'),
('Prepare for the team meeting'),
('Update the project timeline'),
('Test the new features'),
('Fix the reported bugs'),
('Deploy the application to production'),
('Conduct a code review with peers');
