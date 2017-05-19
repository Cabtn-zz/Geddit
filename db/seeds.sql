USE geddit_test;

DROP TABLE `geddit_test`.`Users`;
DROP TABLE `geddit_test`.`Courses`;

SELECT * FROM Users;
SELECT * FROM Courses;
SELECT * FROM Reviews;
SELECT * FROM Progresses;

/* SAMPLE DATA FOR USERS TABLE */
INSERT INTO Users (username, createdAt, updatedAt)
VALUES
("test2", current_timestamp, current_timestamp),
("test3", current_timestamp, current_timestamp),
("todoer", current_timestamp, current_timestamp),
("michellethequeen", current_timestamp, current_timestamp),
("juantheman", current_timestamp, current_timestamp);

/* SAMPLE DATA FOR COURSES TABLE */
INSERT INTO Courses (course_title, course_cat, course_desc, course_url, progress_length, createdAt, updatedAt, UserId)
VALUES ("Javascript30", "JS", "Javascript for 30 Days", "https://javascript30.com", 30, current_timestamp, current_timestamp, 1),
("Nodeschool", "Node.js", "Learning Node using CLI", "https://nodeschool.io/", 30, current_timestamp, current_timestamp, 1),
("Nodeschool2", "Node.js", "Learning Node using CLI", "https://nodeschool.io/", 30, current_timestamp, current_timestamp, 5);

/* SAMPLE DATA FOR REVIEWS TABLE */
INSERT INTO Reviews (review_title, review_text, createdAt, updatedAt, CourseId, UserId)
VALUES
("Review Title", "This is the review text 2", current_timestamp, current_timestamp, 1, 3),
("Best JS course out there!", "This is the review text", current_timestamp, current_timestamp, 1, 1),
("Best Node course out there!", "This is the review text", current_timestamp, current_timestamp, 2, 1);

/* SAMPLE DATA FOR PROGRESSES TABLE */
INSERT INTO Progresses (current_progress, completed, createdAt, updatedAt, CourseId, UserId)
VALUES
(10, FALSE, current_timestamp, current_timestamp, 1, 1),
(30, TRUE, current_timestamp, current_timestamp, 1, 4),
(25, FALSE, current_timestamp, current_timestamp, 1, 5);
