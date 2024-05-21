    $(document).ready(function() {
        const $userForm = $('#userForm');
        const $errorFields = $('.error');

        loadRoles();
        fetchUsers();

        $userForm.on('submit', function(e) {
            e.preventDefault();
            clearErrors();
            if (validateForm()) {
                handleFormSubmit();
            }
        });

        function loadRoles() {
            $.get('/api/roles', function(data) {
                const $roleSelect = $('#role_id');
                $roleSelect.empty();               
                $roleSelect.append($('<option>', { value: '', text: 'Select Role' }));
                $.each(data, function(index, role) {
                    $roleSelect.append($('<option>', { value: role.id, text: role.name }));
                });
            });
        }
        

        function fetchUsers() {
            $.get('/api/users', function(data) {
                const $tbody = $('#usersTable tbody');
                $tbody.empty();
                $.each(data, function(index, user) {
                    const profileImage = user.profile_image ? `<img src="/storage/${user.profile_image}" class="profile-image">` : 'No Image';
                    $tbody.append(`
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.phone}</td>
                            <td>${user.description}</td>
                            <td>${user.role.name}</td>
                            <td>${profileImage}</td>
                        </tr>
                    `);
                });
                $('#usersTable').DataTable();
            });
        }

        function handleFormSubmit() {
            const formData = new FormData($userForm[0]);
            $.ajax({
                url: '/api/users',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(user) {
                    alert('User added successfully');
                    appendUser(user);
                    clearErrors();
                    $userForm[0].reset();
                },
                error: function(xhr) {
                    const errors = xhr.responseJSON.errors;
                    displayErrors(errors);
                }
            });
        }

        function appendUser(user) {
            const profileImage = user.profile_image ? `<img src="/storage/${user.profile_image}" class="profile-image">` : 'No Image';
            const table = $('#usersTable').DataTable();
            table.row.add([
                user.name,
                user.email,
                user.phone,
                user.description,
                user.role.name,
                profileImage
            ]).draw();
        }

        function clearErrors() {
            $errorFields.text('');
        }

        function displayErrors(errors) {
            for (const [field, messages] of Object.entries(errors)) {
                $(`#error-${field}`).text(messages.join(', '));
            }
        }

        function validateForm() {
            let isValid = true;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phonePattern = /^[6-9]\d{9}$/;

            $errorFields.each(function() {
                $(this).text('');
            });

            // Validation for other fields

            return isValid;
        }
    });
