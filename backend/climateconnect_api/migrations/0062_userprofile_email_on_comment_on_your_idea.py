# Generated by Django 2.2.20 on 2021-06-24 10:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("climateconnect_api", "0061_auto_20210624_0818"),
    ]

    operations = [
        migrations.AddField(
            model_name="userprofile",
            name="email_on_comment_on_your_idea",
            field=models.BooleanField(
                blank=True,
                default=True,
                help_text="Check if user wants to receive emails when they receive a comment on an idea they're a member of",
                null=True,
                verbose_name="Email on idea comment",
            ),
        ),
    ]
