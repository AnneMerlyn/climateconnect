# Generated by Django 3.2 on 2022-04-19 07:39

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("chat_messages", "0012_auto_20210611_0622"),
    ]

    operations = [
        migrations.AlterField(
            model_name="message",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name="messageparticipants",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
