# Generated by Django 2.2.18 on 2021-04-07 05:15

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("climateconnect_api", "0051_userprofiletranslation"),
    ]

    operations = [
        migrations.AddField(
            model_name="availability",
            name="name_de_translation",
            field=models.CharField(
                blank=True,
                help_text="German translation of user's availability",
                max_length=512,
                null=True,
                verbose_name="Name DE translation",
            ),
        ),
    ]
