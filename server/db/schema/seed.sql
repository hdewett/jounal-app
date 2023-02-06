INSERT INTO languages(name)
VALUES
('Javascript'),
('Python'),
('Java');

INSERT INTO frameworks(name)
VALUES
('React'),
('Django'),
('Kotlin');

INSERT INTO entries (title, date, body, language_id, framework_id, notes)
VALUES
  ('Using Axios', NOW(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet arcu ac ipsum sagittis, a porta augue iaculis. Maecenas ac odio a ex faucibus mattis in ac magna. Vestibulum viverra mauris metus, non volutpat quam tincidunt vehicula. Duis maximus tincidunt quam hendrerit semper. Cras suscipit, nibh nec consectetur tincidunt, neque lectus sagittis felis, id tempus enim ipsum sed magna. Nam vitae pretium elit. Ut volutpat pellentesque turpis, vel faucibus lacus porta ut.', 1, 1, 'React Routers' ),
  ('How do promises work??', NOW(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet arcu ac ipsum sagittis, a porta augue iaculis. Maecenas ac odio a ex faucibus mattis in ac magna. Vestibulum viverra mauris metus, non volutpat quam tincidunt vehicula. Duis maximus tincidunt quam hendrerit semper. Cras suscipit, nibh nec consectetur tincidunt, neque lectus sagittis felis, id tempus enim ipsum sed magna. Nam vitae pretium elit. Ut volutpat pellentesque turpis, vel faucibus lacus porta ut.', 2, 2, 'Classes and methods' ),
  ('Asynchronous Promgramming for Beginners', NOW(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet arcu ac ipsum sagittis, a porta augue iaculis. Maecenas ac odio a ex faucibus mattis in ac magna. Vestibulum viverra mauris metus, non volutpat quam tincidunt vehicula. Duis maximus tincidunt quam hendrerit semper. Cras suscipit, nibh nec consectetur tincidunt, neque lectus sagittis felis, id tempus enim ipsum sed magna. Nam vitae pretium elit. Ut volutpat pellentesque turpis, vel faucibus lacus porta ut.', 3, 3, 'android' )
