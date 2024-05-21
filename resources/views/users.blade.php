<!DOCTYPE html>
<html>
<head>
    <title>Laravel Users</title>
    <link rel="stylesheet" href="{{ asset('css/jquery.dataTables.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

<h2>Users</h2>
<form id="userForm">
    @csrf
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <div class="error" id="error-name"></div>

    <label for="email">Email:</label>
    <input type="text" id="email" name="email">
    <div class="error" id="error-email"></div>

    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone">
    <div class="error" id="error-phone"></div>

    <label for="description">Description:</label>
    <textarea id="description" name="description"></textarea>
    <div class="error" id="error-description"></div>

    <label for="role_id">Role:</label>
    <select id="role_id" name="role_id"></select>
    <div class="error" id="error-role_id"></div>

    <label for="profile_image">Profile Image:</label>
    <input type="file" id="profile_image" name="profile_image">
    <div class="error" id="error-profile_image"></div>

    <button type="submit">Submit</button>
</form>

<h3>User List</h3>
<table id="usersTable" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Role</th>
            <th>Profile Image</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>


<script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('js/userscript.js') }}"></script>
</body>
</html>
