# Generated by Django 2.2.13 on 2020-07-04 22:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("organization", "0039_auto_20200704_2126"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="is_draft",
            field=models.BooleanField(
                default=False,
                help_text="Whether project is public or just a private draft",
                verbose_name="Is Draft?",
            ),
        ),
    ]
