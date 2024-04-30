# Generated by Django 2.2.24 on 2021-10-28 13:49

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("climate_match", "0008_question_number_of_choices"),
    ]

    operations = [
        migrations.AddField(
            model_name="question",
            name="minimum_choices_required",
            field=models.IntegerField(
                blank=True,
                default=1,
                help_text="How many choices does the user have to select to be able to go forward?",
                null=True,
                verbose_name="Minimum choices required",
            ),
        ),
    ]
