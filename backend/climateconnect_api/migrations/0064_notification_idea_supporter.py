# Generated by Django 2.2.20 on 2021-06-28 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("ideas", "0015_ideatranslation_is_manual_translation"),
        ("climateconnect_api", "0063_auto_20210628_1150"),
    ]

    operations = [
        migrations.AddField(
            model_name="notification",
            name="idea_supporter",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="notification_idea_supporter",
                to="ideas.IdeaSupporter",
                verbose_name="Idea Supporter",
            ),
        ),
    ]
