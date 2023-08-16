# Generated by Django 4.2.3 on 2023-08-14 09:58

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Complexity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('complexity', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=50)),
                ('comment', models.CharField(blank=True, max_length=50, null=True)),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None)),
                ('email', models.EmailField(max_length=70)),
                ('account_discord', models.CharField(max_length=37)),
                ('account_linkedin', models.CharField(max_length=128)),
                ('city', models.CharField(max_length=50)),
                ('experience', models.BooleanField(default=False)),
                ('stack', models.CharField(blank=True, max_length=300, null=True)),
                ('conditions_participation', models.BooleanField(default=False)),
                ('processing_personal_data', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Speciality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='StatusProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='TemplateLatter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letter', models.TextField()),
                ('pdf_file', models.FileField(upload_to='files/')),
            ],
        ),
        migrations.CreateModel(
            name='TypeParticipant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='TypeProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_type', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('comment', models.TextField(blank=True, max_length=50, null=True)),
                ('start_date_project', models.DateField()),
                ('end_date_project', models.DateField(blank=True, null=True)),
                ('address_site', models.URLField(blank=True, max_length=30, null=True)),
                ('url', models.SlugField(max_length=30, unique=True)),
                ('complexity', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user_project.complexity')),
                ('project_status', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user_project.statusproject')),
                ('type_project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='user_project.typeproject')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectParticipants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='project_participants', to='user_project.projects')),
                ('user', models.ManyToManyField(blank=True, null=True, to='user_project.participant')),
            ],
        ),
        migrations.AddField(
            model_name='participant',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='user_project.projects'),
        ),
        migrations.AddField(
            model_name='participant',
            name='speciality',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='user_project.speciality'),
        ),
        migrations.AddField(
            model_name='participant',
            name='type_participant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='user_project.typeparticipant'),
        ),
    ]
